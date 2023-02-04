<script setup lang="ts">
import Switch from '../components/Switch.vue';
import {ref} from 'vue';

const checked = ref(false);
const checked2 = ref(false);
</script>

<template>
  <h1>Switch 示例1</h1>
  <Switch v-model:value="checked"/>
  <h1>Switch 示例2</h1>
  <Switch v-model:value="checked2" disabled/>
</template>

<style lang="scss" scoped>
</style>