/* eslint-disable */
import { createStore } from "vuex";

export default createStore({
  state: {
    postList: [],
    userLists: [],
  },
  getters: {
    getPostList(state) {
      return state.postList;
    },
    getUserList(state) {
      return state.userLists;
    },
  },
  mutations: {
    setPostList(state, payload) {
      state.postList = payload;
    },
    setUserList(state, payload) {
      state.userLists = payload;
    },
  },
  actions: {
    async fetchPostList({ commit }) {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      commit("setPostList", data);
    },
    async fetchUserList({ commit }) {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      commit("setUserList", data);
    }
  },
  modules: {},
});
