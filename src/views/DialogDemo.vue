<script setup lang="ts">
import Dialog from '../components/Dialog.vue';
import Button from '../components/Button.vue';
import {ref} from 'vue';

const xxx = ref(false);
const toggleDialog = () => {
  xxx.value = !xxx.value;
};
</script>

<template>
  <div>Dialog 示例</div>
  <h2>示例1</h2>
  <Button @click="toggleDialog">toggle</Button>
  <Dialog :visible="xxx"/>
</template>

<style lang="scss" scoped>
</style>