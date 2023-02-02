<script setup lang="ts">
import Dialog from '../components/Dialog.vue';
import Button from '../components/Button.vue';
import {ref} from 'vue';

const xxx = ref(false);
const toggleDialog = () => {
  xxx.value = !xxx.value;
};
const fn1 = () => {
  console.log(1);
  return true;
};
const fn2 = () => {
  console.log(2);
};
</script>

<template>
  <div>Dialog 示例</div>
  <h2>示例1</h2>
  <Button @click="toggleDialog">toggle</Button>
  <Dialog v-model:visible="xxx" :ok="fn1" :cancle="fn2" clickCloseOverlay>
    <template v-slot:header>
      <strong>加粗标题</strong>
    </template>
    <template #content>
      <div>content-1</div>
      <div>content-2</div>
    </template>
  </Dialog>
</template>

<style lang="scss" scoped>
</style>