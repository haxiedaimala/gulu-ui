<script setup lang="ts">
import {ref} from 'vue';

const props = defineProps({
  path: {
    type: String,
    required: true
  }
});
const md = ref<string>('');
import (props.path).then(result => md.value = result.default);
</script>

<template>
  <article class="markdown-body">
    <component :is="md"/>
  </article>
</template>

<style lang="scss" scoped>
</style>