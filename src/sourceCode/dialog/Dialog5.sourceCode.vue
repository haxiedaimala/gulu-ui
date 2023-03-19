<sourceCode>
支持 hasButton
<detail>
  <p>你可以使用<code>hasButton</code>属性来定义按钮是否存在。</p>
  该属性接受一个<code>Boolean</code>类型的值。
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
  <Dialog v-model="isVisible" has-button>
    <template #header>
      <strong>加粗标题</strong>
    </template>
    <div>content-1</div>
    <div>content-2</div>
  </Dialog>
</template>