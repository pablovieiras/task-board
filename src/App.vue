<template>
  <div id="app" class="taskboard">
    <Navbar />
    <main class="taskboard__content">
      <div class="u-flex-space-between">
        <Options />
        <button class="button" @click="setModalAddEditTask(true)">
          New task
        </button>
      </div>
      <Board />
    </main>

    <ModalAddEdit />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Navbar from '@/components/Navbar';
import Board from '@/components/Board';
import Options from '@/components/Options';
import ModalAddEdit from '@/components/AddEditTask';

export default {
  name: 'app',
  components: {
    Board,
    Navbar,
    Options,
    ModalAddEdit,
  },
  methods: {
    ...mapActions(['setModalAddEditTask']),
  },
};
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
