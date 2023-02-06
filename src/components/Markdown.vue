<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true
  }
});

</script>

<template>
  <article class="markdown-body">
    <component :is="content"/>
  </article>
</template>

<style lang="scss" scoped>
</style>