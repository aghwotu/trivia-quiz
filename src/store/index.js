import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: null,
    questions: null,
  },

  getters: {},

  actions: {},

  mutations: {
    setQuestions: (state, questions) => {
      state.questions = questions;
    },
    setToken: (state, token) => {
      state.token = token;
    },
  },
});

export default { store };
