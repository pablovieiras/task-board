<template>
  <section class="board">
    <Column
      name="Backlog"
      color="red"
      :items="itemsBacklog"
      @SORT_ITEMS="sortBacklog"
    />
    <Column
      name="In progress"
      color="yellow"
      :items="itemsInProgress"
      @SORT_ITEMS="sortInProgress"
    />
    <Column
      name="Review"
      color="green"
      :items="itemsReview"
      @SORT_ITEMS="sortReview"
    />
    <Column
      name="Done"
      color="purple"
      :items="itemsDone"
      @SORT_ITEMS="sortDone"
    />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Column from '@/components/Column';

export default {
  name: 'Board',
  components: {
    Column,
  },
  data: () => ({}),
  computed: {
    ...mapGetters({
      itemsBacklog: 'getBacklog',
      itemsInProgress: 'getInProgress',
      itemsReview: 'getReview',
      itemsDone: 'getDone',
    }),
  },
  methods: {
    ...mapActions(['setBacklog', 'setInProgress', 'setReview', 'setDone']),
    sortArray(payload, items) {
      if (payload.sort) {
        if (payload.type === 'asc') {
          items.sort((a, b) => a.name.localeCompare(b.name));
        } else if (payload.type === 'desc') {
          items.sort((a, b) => b.name.localeCompare(a.name));
        }
      } else items.sort((a, b) => a.id - b.id);
    },
    sortBacklog(payload) {
      this.sortArray(payload, this.itemsBacklog);
    },
    sortInProgress(payload) {
      this.sortArray(payload, this.itemsInProgress);
    },
    sortReview(payload) {
      this.sortArray(payload, this.itemsReview);
    },
    sortDone(payload) {
      this.sortArray(payload, this.itemsDone);
    },
  },
  mounted() {
    this.setBacklog([
      {
        id: 1,
        name: 'Dashboard',
        description: 'Dashboard version 2.0 with new UI',
        type: 'EPIC',
        visible: true,
      },

      {
        id: 2,
        name: 'Sing Up Improvement',
        description: 'Add a new field in the sing up form',
        type: 'TASK',
        visible: true,
      },
      {
        id: 3,
        name: 'Login Screen',
        description: 'Option to recover password is not working',
        type: 'BUG',
        visible: true,
      },
    ]);
  },
};
</script>
