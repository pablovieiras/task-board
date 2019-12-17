import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const getColor = type =>
  ({
    TASK: 'red',
    STORY: 'yellow',
    BUG: 'green',
    EPIC: 'purple',
  }[type] || 'default');

export default new Vuex.Store({
  state: {
    backlog: [],
    inProgress: [],
    review: [],
    done: [],
    tasksTypes: [
      { id: 1, name: 'Task', type: 'TASK', color: 'red' },
      { id: 2, name: 'Story', type: 'STORY', color: 'yellow' },
      { id: 3, name: 'Bug', type: 'BUG', color: 'green' },
      { id: 4, name: 'Epic', type: 'EPIC', color: 'purple' },
    ],
    itemToEdit: null,
    colorModal: '',
    modals: {
      addEditTask: false,
    },
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
    removeTask(state, payload) {
      state.backlog = state.backlog.filter(item => item.id !== payload.id);
      state.inProgress = state.inProgress.filter(
        item => item.id !== payload.id
      );
      state.review = state.review.filter(item => item.id !== payload.id);
      state.done = state.done.filter(item => item.id !== payload.id);
    },
    filterTask(state, payload) {
      state.backlog = state.backlog.map(item => {
        item.visible = payload ? item.type === payload : true;

        return item;
      });

      state.inProgress = state.inProgress.map(item => {
        item.visible = payload ? item.type === payload : true;

        return item;
      });

      state.review = state.review.map(item => {
        item.visible = payload ? item.type === payload : true;

        return item;
      });

      state.done = state.done.map(item => {
        item.visible = payload ? item.type === payload : true;

        return item;
      });
    },
    itemToEdit(state, payload) {
      state.modals.itemToEdit = payload;
    },
    colorModal(state, payload) {
      state.colorModal = payload;
    },
    // Modals
    modalAddEditTask(state, payload) {
      state.modals.addEditTask = payload;
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
    getTasksTypes(state) {
      return state.tasksTypes;
    },
    getItemToEdit(state) {
      return state.itemToEdit;
    },
    getColorModal(state) {
      let color = 'default';

      if (state.itemToEdit) color = getColor(state.itemToEdit.type);
      else if (state.colorModal) color = state.colorModal;

      return color;
    },
    // Modals
    getModalAddEditTask(state) {
      return state.modals.addEditTask;
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
    setRemoveTask(context, payload) {
      context.commit('removeTask', payload);
    },
    setFilterTask(context, payload) {
      context.commit('filterTask', payload);
    },
    setItemToEdit(context, payload) {
      context.commit('itemToEdit', payload);
    },
    setColorModal(context, payload) {
      context.commit('colorModal', payload);
    },
    // Modals
    setModalAddEditTask(context, payload) {
      context.commit('modalAddEditTask', payload);
    },
  },
});
