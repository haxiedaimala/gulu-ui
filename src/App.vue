<script setup lang="ts">
import {onMounted, provide, ref} from 'vue';
import {router} from './router';

const width = ref(document.documentElement.clientWidth);
const number = 960;
onMounted(() => {
  window.onresize = () => {
    width.value = document.documentElement.clientWidth;
  };
});
const asideVisible = ref(width.value <= number);
provide('asideVisible', asideVisible);
router.afterEach(() => {
  if (width.value <= number) {
    asideVisible.value = false;
  }
});
</script>

<template>
  <router-view/>
</template>
