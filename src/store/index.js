import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: {
      registered: [],
      moderated: [],
      approved: [],
    },
    isLoading: false,
  },
  getters: {
    getRegistratedUsers: (state) => state.users.registered,
    getModeratedUsers: (state) => state.users.moderated,
    getApprovedUsers: (state) => state.users.approved,
    getLoadingState: (state) => state.isLoading,
    isRegisteredArrayEmpty: (state) => state.users.registered.length,

    getFilteredUserData: (state) => (uuid) => {
      const filteredUserData = [];

      Object.values(state.users).forEach((array) => {
        filteredUserData.push(...array.filter((user) => user?.login?.uuid === uuid));
      });

      return filteredUserData[0];
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.users.registered = [...user];
    },
  },
  actions: {
    async fetchRandomUser({ commit }) {
      try {
        this.state.isLoading = true;
        const response = await fetch('https://randomuser.me/api');
        const randomUserData = await response.json();
        commit('SET_USER', randomUserData.results);
      } catch (error) {
        console.error(error);
      } finally {
        this.state.isLoading = false;
      }
    },
  },
  modules: {
  },
});
