import Vue from 'vue'
import App from './App.vue'

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

// This already imports 'onsenui'
import VueOnsen from 'vue-onsenui'; 
Vue.use(VueOnsen);

// Vuex
import store from './vuex';

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
