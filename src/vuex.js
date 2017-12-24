import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 設定データ
import {SetList, PartsList, DefaultImages, ImageList} from './config.js';


export default new Vuex.Store({
  state: {
    bufferSpriteObjList: [],    // スプライト情報(これのデータを操作すればOK)
    SetList,
    PartsList,
    DefaultImages,
    ImageList,
  },
  actions: {
    clearBufferSpriteObjList(context) {
      context.commit('clearBufferSpriteObjList');
    },
    addBufferSpriteObjList(context, value) {
      context.commit('addBufferSpriteObjList', value);
    },
  },
  mutations: {
    clearBufferSpriteObjList(state) {
      state.bufferSpriteObjList.forEach((element) => {
        element.spriteList.forEach((element2) => {
          // 親から削除すればOKらしい
          element2.parent().remove( element2 );
        })
      });
      state.bufferSpriteObjList.splice(0, state.bufferSpriteObjList.length);
    },
    addBufferSpriteObjList(state, value) {
      state.bufferSpriteObjList.push(value);
    },
  },
})