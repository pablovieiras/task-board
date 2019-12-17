<template>
  <Draggable class="task" group="tasks" :list="list" @change="moveTask">
    <div
      class="task__item"
      v-for="(item, index) in visibleItems"
      :class="`task__item--${getColor(item.type)}`"
      :key="`${item.type}-${item.id}${index}`"
    >
      <h4>{{ item.name }}</h4>
      <p>{{ item.description }}</p>
      <button
        class="button button--icon"
        title="Delete task"
        @click="removeTask(item)"
      >
        <span class="icon-cross" />
      </button>
    </div>
  </Draggable>
</template>

<script>
import { mapActions } from 'vuex';

import Draggable from 'vuedraggable';

export default {
  name: 'Task',
  components: {
    Draggable,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    visibleItems() {
      return this.list.filter(i => i.visible);
    },
  },
  methods: {
    ...mapActions(['setRemoveTask']),
    getColor(type) {
      return (
        {
          TASK: 'red',
          STORY: 'yellow',
          BUG: 'green',
          EPIC: 'purple',
        }[type] || 'default'
      );
    },
    removeTask(item) {
      this.setRemoveTask(item);
    },
    moveTask(item) {
      console.log(item);
    },
  },
};
</script>
