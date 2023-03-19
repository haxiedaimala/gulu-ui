<sourceCode>
常规使用
<detail>
  使用 <code>v-model</code> 双向绑定属性 <code>isVisible</code>，实现 <code>Dialog</code>的显示与关闭
</detail>
</sourceCode>

<script setup lang="ts">
import Dialog from '../../components/lib/Dialog.vue';
import Button from '../../components/lib/Button.vue';
import {ref} from 'vue';

const isVisible = ref(false);
const toggleDialog = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <Button @click="toggleDialog">toggle</Button>
  <Dialog v-model="isVisible">
    <div>content-1</div>
    <div>content-2</div>
  </Dialog>
</template>