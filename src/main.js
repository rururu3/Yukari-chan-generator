import Vue from 'vue'
import App from './App.vue'

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

// This already imports 'onsenui'
import VueOnsen from 'vue-onsenui'; 
Vue.use(VueOnsen);

new Vue({
  el: '#app',
  render: h => h(App),
});
