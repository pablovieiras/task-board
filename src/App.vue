<template>
  <div id="app" class="taskboard">
    <Navbar />
    <main class="taskboard__content">
      <Options />
      <Board />
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Board from '@/components/Board';
import Options from '@/components/Options';

export default {
  name: 'app',
  components: {
    Board,
    Navbar,
    Options,
  },
};
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
