<sourceCode>
支持 clickCloseOverlay
<detail>
  <p>你可以使用<code>clickCloseOverlay</code>属性来定义点击遮罩层是否关闭
    <code>Dialog</code>,该属性接受一个 <code>Boolean</code> 类型的值。
  </p>
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
  <Dialog v-model="isVisible" clickCloseOverlay has-button>
    <template #header>
      <strong>加粗标题</strong>
    </template>
    <div>content-1</div>
    <div>content-2</div>
  </Dialog>
</template>