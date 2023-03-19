<sourceCode>
支持 title
<detail>
  使用 <code>title</code> 属性实现标题的自由书写，支持相关 <code>HTML</code>的标签的书写，实现自定义标题的内容与样式选择
</detail>
</sourceCode>

<script setup lang="ts">
import Dialog from '../../components/Dialog.vue';
import Button from '../../components/Button.vue';
import {ref} from 'vue';

const isVisible = ref(false);
const toggleDialog = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <Button @click="toggleDialog">toggle</Button>
  <Dialog v-model="isVisible">
    <template #header>
      <strong>加粗标题</strong>
    </template>
    <div>content-1</div>
    <div>content-2</div>
  </Dialog>
</template>