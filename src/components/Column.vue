<template>
  <div class="column">
    <div class="column__header" :class="`column__header--${color}`">
      <span>{{ name }} ({{ items.length }})</span>
      <span
        class="column__icon-sort"
        :class="{
          'column__icon-sort--inactive': !sort,
          'icon-sort-alpha-asc': sortType === 'asc',
          'icon-sort-alpha-desc': sortType === 'desc',
        }"
        @click="selectSort"
      />
    </div>
    <div class="column__content">
      <template>
        <Task :list="items" />
      </template>
    </div>
    <div class="column__footer" title="Add task">
      <span class="icon-plus"></span>
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task';

export default {
  name: 'Column',
  components: {
    Task,
  },
  props: {
    name: {
      type: String,
      default: 'Column',
    },
    items: {
      type: Array,
      default: () => [],
    },
    color: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    sort: false,
    sortType: 'asc',
  }),
  methods: {
    selectSort() {
      if (this.sort && this.sortType === 'asc') {
        this.sortType = 'desc';
      } else if (this.sort && this.sortType === 'desc') {
        this.sortType = 'asc';
        this.sort = !this.sort;
      } else {
        this.sort = !this.sort;
      }

      this.$emit('SORT_ITEMS', { type: this.sortType, sort: this.sort });
    },
  },
};
</script>
