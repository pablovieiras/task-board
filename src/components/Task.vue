<template>
  <Draggable class="task" group="tasks" :list="list" @change="moveTask">
    <div
      class="task__item"
      v-for="(item, index) in list"
      :class="`task__item--${getColor(item.type)}`"
      :key="`${item.type}-${item.id}${index}`"
    >
      <h4>{{ item.name }}</h4>
      <p>{{ item.description }}</p>
    </div>
  </Draggable>
</template>

<script>
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
  methods: {
    getColor(type) {
      return (
        {
          TASK: 'red',
          STORY: 'yellow',
          BUG: 'green',
          EPIC: 'purple',
        }[type] || 'white'
      );
    },
    moveTask(item) {
      console.log(item);
    },
  },
};
</script>
