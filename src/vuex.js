import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalVisible: false,
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