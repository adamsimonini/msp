import Vue from 'vue';
import Vuex from 'vuex';
import * as auth from '@/services/AuthService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    // a dynamic API URL, what we appropriately change with the server's location
    apiUrl: `${window.location.protocol}//${window.location.hostname}:3000/api`,
    // apiUrl: 'http://localhost:3000/api',
    username: '',
    userId: 0,
  },
  mutations: {
    authenticate(state) {
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn) {
        state.username = auth.getUsername();
        state.userId = auth.getUserId();
      } else {
        state.username = '';
        state.userId = 0;
      }
    },
  },
  actions: {
    authenticate(context) {
      context.commit('authenticate');
    },
  },
});
