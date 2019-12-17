<template>
  <div class="input">
    <textarea name="custom-input" placeholder=" " rows="2" v-if="textarea" />
    <input name="custom-input" :type="type" placeholder=" " v-else />
    <label for="custom-input">{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    placeholder: {
      type: String,
      default: 'Title',
    },
    type: {
      type: String,
      default: 'text',
    },
    textarea: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
