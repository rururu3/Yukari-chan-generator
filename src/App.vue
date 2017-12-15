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
    <three-view></three-view>

    <!-- モーダルウィンドウ -->
    <setting-modal></setting-modal>
  </v-ons-page>
</template>

<style lang="scss">
</style>

<script>
  // コンポーネント
  import SettingModal from './setting/SettingModal.vue';
  import ThreeView from './ThreeView.vue';

  export default {
    name: 'app',
    components: {
      SettingModal,
      ThreeView,
    },
    data () {
      return {
        title: 'Yukari-chan generator(Santa ver.)',
      }
    },
    methods: {
      settingButtonClick: function() {
        this.$store.commit('modalVisible', true);
      },
    },
  }
</script>
