<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
      <div class="right">
        <v-ons-toolbar-button>
          <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>

    <p style="text-align: center">
      <v-ons-button @click="settingButtonClick">
        設定
      </v-ons-button>
      <!-- 画像表示テスト
      <img src="./assets/images/bottom_01.png" />
      -->
    </p>

    <!-- TreeJS表示場所 -->
    <div ref="stage"></div>

    <!-- モーダルウィンドウ -->
    <setting-modal></setting-modal>
  </v-ons-page>
</template>

<style lang="scss">
</style>

<script>
  // 必要ライブラリ
  import * as THREE from 'three';
  import convert from 'color-convert';

  // コンポーネント
  import SettingModal from './setting/SettingModal.vue';

  export default {
    name: 'app',
    components: {
      SettingModal,
    },
    data () {
      return {
        title: 'Yukari-chan generator(Santa ver.)',
        scene: null,
        renderer: null,
        camera: null,
        light: null,
        sprites: [],
        hsv: [96, 50, 78],
      }
    },
    mounted: function() {
      // canvasのサイズ指定(px・・・と思う)
      let _width = 100;
      let _height = 100;

      // === scene ===
      this.scene = new THREE.Scene ();

      // === renderer ===
      this.renderer = new THREE.WebGLRenderer ();
      this.renderer.setSize( 100, _height );

      // === camera ===
      this.camera = new THREE.PerspectiveCamera (75, _width / _height, 0.1, 1000);
      this.camera.position.z = 5;

      // === light ===
      this.light = new THREE.AmbientLight( 0xffffff );

      // === sceneにmodel,light, cameraを追加 ===
      this.scene.add( this.camera );
      this.scene.add( this.light);

      // === model ===
      const _list = [
        'dist/assets/images/legs_01.png',
        'dist/assets/images/bottom_01.png',
        'dist/assets/images/bra_01.png',
        'dist/assets/images/tops_01_1.png',
        'dist/assets/images/face_01.png',
        'dist/assets/images/hair_00_1.png',
      ];
      let _z = 0.0;
      _list.forEach((element) => {
        const spriteMap = new THREE.TextureLoader().load( element );
        const spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff } );
        const sprite = new THREE.Sprite( spriteMaterial );
        console.log(sprite);
        sprite.scale.x = spriteMap.image.naturalWidth / 200.0;
        sprite.scale.y = spriteMap.image.naturalHeight / 200.0;
        sprite.position.z = _z;
        this.scene.add( sprite );
        _z += 0.1;

        this.sprites.push( sprite );
      });

      // === DOMを追加, animate ===
      this.$refs.stage.appendChild(this.renderer.domElement);
      this.animate();      
    },
    methods: {
      // レンダー関数(requestAnimationFrameで毎フレーム描画)
      animate: function() {
        requestAnimationFrame( this.animate );

        // 
        const _rgb = convert.hsv.rgb(this.hsv);
        this.hsv[0] = (this.hsv[0] + 1) % 256;

        this.sprites.forEach((element) => {
          // element.rotation.x += 0.05;
          // element.rotation.y += 0.05;
          element.material.color.r = _rgb[0] / 255.0;
          element.material.color.g = _rgb[1] / 255.0;
          element.material.color.b = _rgb[2] / 255.0;
        });

        this.renderer.render(this.scene, this.camera);
      },
      settingButtonClick: function() {
        this.$store.commit('modalVisible', true);
      },
    },
  }
</script>
