<script setup lang="ts">
import {provide, ref} from 'vue';
import {router} from './router';

const width = document.documentElement.clientWidth;
const asideVisible = ref(width > 960);
provide('asideVisible', asideVisible);
router.afterEach(() => {
  if (width <= 960) {
    asideVisible.value = false;
  }
});
</script>

<template>
  <router-view/>
</template>

<style scoped>
</style>
