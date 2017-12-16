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

    <div>
      <!-- TreeJS表示場所 -->
      <three-view style="float:left; width: 512px; height: 1024px;"></three-view>

      <!-- 設定表示場所 -->
      <setting-main style="float:left; width: 512px;"></setting-main>
    </div>
  </v-ons-page>
</template>

<style lang="scss">
</style>

<script>
  // コンポーネント
  import SettingMain from './setting/SettingMain.vue';
  import ThreeView from './ThreeView.vue';

  export default {
    name: 'app',
    components: {
      SettingMain,
      ThreeView,
    },
    data () {
      return {
        title: 'Yukari-chan generator(Santa ver.)',
      }
    },
    methods: {
    },
  }
</script>
