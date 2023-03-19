<sourceCode>
支持事件处理
<detail>
  <p> 使用<code>ok</code><code>cancle</code>属性，实现用户自定义事件处理选择</p>
  点击<code>footer</code>的按钮时，当需要点击<code>ok</code>按钮处理某逻辑时，需要返回值为<code>true</code>，来保证逻辑的合理性
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
const fn1 = () => {
  alert('ok');
};
const fn2 = () => {
  alert('cancle');
};
</script>

<template>
  <Button @click="toggleDialog">toggle</Button>
  <Dialog v-model="isVisible" :ok="fn1" :cancle="fn2" has-button>
    <template #header>
      <strong>加粗标题</strong>
    </template>
    <div>content-1</div>
    <div>content-2</div>
  </Dialog>
</template>