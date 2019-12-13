<template>
  <section class="options">
    <div class="options__item" v-for="item in filters" :key="item.id">
      <span :class="`options__icon options__icon--${item.color}`"></span>
      {{ item.name }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'Options',
  data: () => ({
    filters: [
      { id: 1, name: 'Task', color: 'red' },
      { id: 2, name: 'Story', color: 'yellow' },
      { id: 3, name: 'Bug', color: 'green' },
      { id: 4, name: 'Epic', color: 'purple' },
    ],
  }),
};
</script>
