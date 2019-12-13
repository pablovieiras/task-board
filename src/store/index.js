import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backlog: [],
    inProgress: [],
    review: [],
    done: [],
  },
  mutations: {
    backlog(state, payload) {
      if (payload instanceof Array) state.backlog = payload;
      else state.backlog.push(payload);
    },
    inProgress(state, payload) {
      if (payload instanceof Array) state.inProgress = payload;
      else state.inProgress.push(payload);
    },
    review(state, payload) {
      if (payload instanceof Array) state.review = payload;
      else state.review.push(payload);
    },
    done(state, payload) {
      if (payload instanceof Array) state.done = payload;
      else state.done.push(payload);
    },
  },
  getters: {
    getBacklog(state) {
      return state.backlog;
    },
    getInProgress(state) {
      return state.inProgress;
    },
    getReview(state) {
      return state.review;
    },
    getDone(state) {
      return state.done;
    },
  },
  actions: {
    setBacklog(context, payload) {
      context.commit('backlog', payload);
    },
    setInProgress(context, payload) {
      context.commit('inProgress', payload);
    },
    setReview(context, payload) {
      context.commit('review', payload);
    },
    setDone(context, payload) {
      context.commit('done', payload);
    },
  },
});
