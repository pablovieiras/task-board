<template>
  <section class="options">
    <div
      class="options__item"
      v-for="item in filters"
      :key="item.id"
      :class="{ 'u-opacity-medium': selected && selected !== item.type }"
      @click="selectFilter(item)"
    >
      <span
        class="options__icon"
        :class="
          `options__icon--${item.color} options__icon--${
            selected === item.type ? item.color : ''
          }-selected`
        "
      />
      {{ item.name }}
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Options',
  data: () => ({
    selected: '',
  }),
  computed: {
    ...mapGetters({
      filters: 'getTasksTypes',
    }),
  },
  methods: {
    ...mapActions(['setFilterTask']),
    selectFilter(item) {
      this.selected = this.selected === item.type ? '' : item.type;

      this.setFilterTask(this.selected);
    },
  },
};
</script>
