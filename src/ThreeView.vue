<template>
  <div>
    <!-- TreeJS表示場所 -->
    <div ref="stage"></div>
  </div>
</template>

<style>
</style>

<script>
  // 必要ライブラリ
  import * as THREE from 'three';
  import convert from 'color-convert';

  export default {
    data () {
      return {
        renderer: null,

        // 画面出力用
        scene : null,
        camera: null,
        light: null,
        mesh: null,

        // バッファ出力用
        bufferScene : null,
        bufferCamera: null,
        bufferLight: null,
        bufferTexture: null,

        hsv: [96, 50, 78],
      }
    },
    mounted: function() {
      // canvasのサイズ指定(px・・・と思う)
      let _width = 512;
      let _height = 1024;

      let _bufferWidth = 500;
      let _bufferHeight = 1000;

      // === renderer ===
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(_width, _height);

      // バッファ書き込み用のカメラなど作成
      {
        // === scene ===
        this.bufferScene = new THREE.Scene();

        // === camera ===
        // 正射影
        this.bufferCamera = new THREE.OrthographicCamera(_bufferWidth / - 2, _bufferWidth / 2, _bufferHeight / 2, _height / - 2, -200, 200);
        this.bufferCamera.position.z = 200;
        this.bufferCamera.lookAt(new THREE.Vector3(0, 0, 0));

        // === light ===
        this.bufferLight = new THREE.AmbientLight(0xffffff);

        // === render texture ===
        this.bufferTexture = new THREE.WebGLRenderTarget(_bufferWidth, _bufferHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter});

        // === sceneにmodel,light, cameraを追加 ===
        this.bufferScene.add(this.bufferCamera);
        this.bufferScene.add(this.bufferLight);
        
        // TODO:とりあえずここで全作成してみる
        this.createSpriteList();
      }

      // 実際に描画する用のカメラなど作成
      {
        // === scene ===
        this.scene = new THREE.Scene();

        // 正射影
        this.camera = new THREE.OrthographicCamera(_width / - 2, _width / 2, _height / 2, _height / - 2, 0, 200);
        this.camera.position.z = -10;
        this.camera.lookAt(new THREE.Vector3(0, 0, 200));

        // === light ===
        this.light = new THREE.AmbientLight(0xffffff);

        // === plane ===
        // render textureではどうもspriteは無理っぽいのでPlaneで
        let _geometry = new THREE.PlaneGeometry(_bufferWidth, _bufferHeight, 10, 10);
        let _material = new THREE.MeshBasicMaterial({map: this.bufferTexture, side: THREE.DoubleSide});    
        this.mesh = new THREE.Mesh(_geometry, _material);

        // === sceneにmodel,light, cameraを追加 ===
        this.scene.add(this.camera);
        this.scene.add(this.light);
        this.scene.add(this.mesh);
      }

      // === DOMを追加, animate ===
      this.$refs.stage.appendChild(this.renderer.domElement);
      this.animate();
    },
    methods: {
      // レンダー関数(requestAnimationFrameで毎フレーム描画)
      // 指定テクスチャーに描画するサンプルURL
      // https://gamedevelopment.tutsplus.com/tutorials/quick-tip-how-to-render-to-a-texture-in-threejs--cms-25686
      // これを利用して指定テクスチャーに描画後にそのテクスチャーを描画する(回転するとおかしくなるから)
      animate: function() {
        requestAnimationFrame( this.animate );

        // 
        const _rgb = convert.hsv.rgb(this.hsv);
        this.hsv[0] = (this.hsv[0] + 1) % 256;

        // バッファ書き込み用
        {
          this.$store.state.bufferSpriteObjList.forEach((element) => {
            element.spriteList.forEach((element2) => {
              // element2.rotation.x += 0.05;
              // element2.rotation.y += 0.05;
              element2.material.color.r = _rgb[0] / 255.0;
              element2.material.color.g = _rgb[1] / 255.0;
              element2.material.color.b = _rgb[2] / 255.0;
            });
          });

          this.renderer.setClearColor(new THREE.Color(0x000000), 1.0);
          this.renderer.render(this.bufferScene, this.bufferCamera, this.bufferTexture);
        }

        // 画面書き込み用
        {
          this.renderer.setClearColor(new THREE.Color(0x000000), 1.0);
          this.renderer.render(this.scene, this.camera);
        }
      },
      // スプライト生成
      createSpriteList: function() {
        // スプライトデータが有れば消す処理をする
        this.$store.state.bufferSpriteObjList.forEach((element) => {
          element.spriteList.forEach((element2) => {
            // 親から削除すればOKらしい
            element2.parent().remove( element2 );
          })
        });
        this.$store.dispatch('clearBufferSpriteObjList');

        // データを元に画像をスプライトにしていく
        this.$store.state.ImageList.forEach((element) => {
          let _spriteObj = {
            name: element.name,
            parts: element.parts,
            spriteList: [],
          };

          // パーツデータを取ってきておく
          let _part = this.$store.state.PartsList.find((element2) => {
            return(element2.name == element.parts[0]);
          });

          // 表示設定
          let _visible = (this.$store.state.DefaultImages.findIndex((element2) => {
            return(element2 == element.name);
          }) >= 0);

          // イメージ分sprite作成する
          element.image.forEach((element2) => {
            // ThreeJSのスプライト生成
            // const _spriteMap = new THREE.TextureLoader().load( 'dist/assets/' + element2.src );
            // const _spriteMaterial = new THREE.SpriteMaterial( { map: _spriteMap, color: 0xffffff } );
            // const _sprite = new THREE.Sprite( _spriteMaterial );
            // _sprite.scale.x = _spriteMap.image.naturalWidth;
            // _sprite.scale.y = _spriteMap.image.naturalHeight;

            // render textureではどうもspriteは無理っぽいのでPlaneで
            const _spriteMap = new THREE.TextureLoader().load( 'dist/assets/' + element2.src );
            let _geometry = new THREE.PlaneGeometry(_spriteMap.image.naturalWidth, _spriteMap.image.naturalHeight, 10, 10);
            let _material = new THREE.MeshBasicMaterial({map: _spriteMap, side: THREE.DoubleSide});    
            // アルファテスト有効(いらない)
            // _material.alphaTest = 0.1;
            // 半透明なのでtransparentをtrueにしないといけない
            _material.transparent = true;
            const _sprite = new THREE.Mesh(_geometry, _material);

            // 表示非表示はこれ
            _sprite.visible = _visible;

            // Zはpartsの最初に入ってたものからの相対が入ってる・・・と思う
            _sprite.position.z = _part.zindex + element2.pos;

            // オブジェクトに追加
            _spriteObj.spriteList.push(_sprite);

            // シーンに追加しておく
            this.bufferScene.add(_sprite);
          });
          this.$store.dispatch('addBufferSpriteObjList', _spriteObj);
        });
      },
    },
  }
</script>