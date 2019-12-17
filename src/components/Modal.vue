<template>
  <section class="modal" :class="{ 'modal--opened': show }">
    <div class="modal__container" :class="`modal__container--${color}`">
      <div class="modal__header">
        <h1 class="modal__title">{{ title }}</h1>
        <span class="icon-cross" @click="$emit('CLOSE')" />
      </div>
      <div class="modal__content">
        <slot name="content" />
      </div>
      <div class="modal__footer">
        <button class="button button--transparent" @click="$emit('CLOSE')">
          Cancel
        </button>
        <button class="button button--transparent">Save</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Title',
    },
    color: {
      type: String,
      default: 'default',
    },
  },
};
</script>
