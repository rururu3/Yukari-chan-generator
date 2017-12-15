import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 設定データ
import {SetList, PartsList, DefaultImages, ImageList} from './config.js';


export default new Vuex.Store({
  state: {
    modalVisible: false,
    SetList,
    PartsList,
    DefaultImages,
    ImageList,
  },
  actions: {
    modalVisible(context, value) {
      context.commit('modalVisible', value);
    },
  },
  mutations: {
    modalVisible(state, value) {
      state.modalVisible = value;
    },
  },
})