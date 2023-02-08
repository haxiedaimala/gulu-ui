<sourceCode>常规使用</sourceCode>

<script setup lang="ts">
import Dialog from '../../components/Dialog.vue';
import Button from '../../components/Button.vue';
import {ref} from 'vue';

const isVisible = ref(false);
const toggleDialog = () => {
  isVisible.value = !isVisible.value;
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
  <Button @click="toggleDialog">toggle</Button>
  <Dialog v-model:visible="isVisible" :ok="fn1" :cancle="fn2" clickCloseOverlay>
    <template v-slot:header>
      <strong>加粗标题</strong>
    </template>
    <template #content>
      <div>content-1</div>
      <div>content-2</div>
    </template>
  </Dialog>
</template>