<script setup lang="ts">
import {provide, ref} from 'vue';

const width = document.documentElement.clientWidth;
const asideVisible = ref(width > 500);
provide('asideVisible', asideVisible);
</script>

<template>
  <router-view/>
</template>

<style scoped>
</style>
