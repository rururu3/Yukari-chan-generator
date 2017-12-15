<template>
    <!-- TreeJS表示場所 -->
    <div ref="stage"></div>
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
        scene: null,
        renderer: null,
        camera: null,
        light: null,
        hsv: [96, 50, 78],
        spriteObjList: [],
      }
    },
    mounted: function() {
      // canvasのサイズ指定(px・・・と思う)
      let _width = 1000;
      let _height = 1000;

      // === scene ===
      this.scene = new THREE.Scene ();

      // === renderer ===
      this.renderer = new THREE.WebGLRenderer ();
      this.renderer.setSize( _width, _height );

      // === camera ===
      // 遠近投影は当然だめ
      // this.camera = new THREE.PerspectiveCamera (75, _width / _height, 0.1, 1000);
      // this.camera.position.z = 110;
      // 正射影
      this.camera = new THREE.OrthographicCamera( _width / - 2, _width / 2, _height / 2, _height / - 2, 0, 200 );
      this.camera.position.z = 0;
      this.camera.lookAt( new THREE.Vector3( 0, 0, 200 ) );

      // === light ===
      this.light = new THREE.AmbientLight( 0xffffff );

      // === sceneにmodel,light, cameraを追加 ===
      this.scene.add( this.camera );
      this.scene.add( this.light);

      // === DOMを追加, animate ===
      this.$refs.stage.appendChild(this.renderer.domElement);
      this.animate();
      
      // TODO:とりあえずここで全作成してみる
      this.createSpriteList();
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

        this.spriteObjList.forEach((element) => {
          element.spriteList.forEach((element2) => {
            // element2.rotation.x += 0.05;
            // element2.rotation.y += 0.05;
            element2.material.color.r = _rgb[0] / 255.0;
            element2.material.color.g = _rgb[1] / 255.0;
            element2.material.color.b = _rgb[2] / 255.0;
          });
        });

        this.renderer.render(this.scene, this.camera);
      },
      // スプライト生成
      createSpriteList: function() {
        // スプライトデータが有れば消す処理をする
        this.spriteObjList.forEach((element) => {
          element.spriteList.forEach((element2) => {
            // 親から削除すればOKらしい
            element2.parent().remove( element2 );
          })
        });
        this.spriteObjList.splice(0, this.spriteObjList.length);

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

          // イメージ分sprite作成する
          element.image.forEach((element2) => {
            // ThreeJSのスプライト生成
            const _spriteMap = new THREE.TextureLoader().load( 'dist/assets/' + element2.src );
            const _spriteMaterial = new THREE.SpriteMaterial( { map: _spriteMap, color: 0xffffff } );
            const _sprite = new THREE.Sprite( _spriteMaterial );
            _sprite.scale.x = _spriteMap.image.naturalWidth;
            _sprite.scale.y = _spriteMap.image.naturalHeight;

            // 表示非表示はこれ
            // _sprite.visible = false;

            // Zはpartsの最初に入ってたものからの相対が入ってる・・・と思う
            _sprite.position.z = _part.zindex - element2.pos;

            // オブジェクトに追加
            _spriteObj.spriteList.push(_sprite);

            // シーンに追加しておく
            this.scene.add( _sprite );
          });
          this.spriteObjList.push(_spriteObj);
        });
      }
    },
  }
</script>