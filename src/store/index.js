import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  getters: {
    users(state) {
      return state.users;
    },
  },
  mutations: {
    SET_USERS_TO_VUEX(state, users) {
      state.users = users;
    },
  },
  actions: {
    GET_USERS_FROM_API({ commit }) {
      axios
        .get('http://localhost:3000/users')
        .then((response) => {
          commit('SET_USERS_TO_VUEX', response.data);
        })
        .catch((err) => console.log(err));
    },
  },
  modules: {
  },
});
