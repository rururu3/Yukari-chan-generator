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
      <v-ons-button @click="$ons.notification.alert('Hello World!')">
        Click me!
      </v-ons-button>
      <!-- 画像表示テスト
      <img src="./assets/images/bottom_01.png" />
      -->
    </p>
  </v-ons-page>
</template>

<style lang="scss">
</style>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
