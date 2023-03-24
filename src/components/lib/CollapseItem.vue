<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
</script>

<template>
  <slot/>
</template>