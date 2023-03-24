<script setup lang="ts">
defineProps({
  title: {
    type: String || Array,
    required: true
  },
  name: {
    type: String || Number,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <slot/>
</template>