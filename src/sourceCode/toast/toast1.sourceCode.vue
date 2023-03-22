<sourceCode>
常规用法
<detail>
  从顶部出现，3 秒后自动消失。可以接收一个字符串作为参数，它会被显示为正文内容。
</detail>
</sourceCode>

<script setup lang="ts">
import Button from '../../components/lib/Button.vue';
import {openToast} from '../../components/lib/openToast';

const showToast = () => {
  openToast({
    message: 'hello'
  });
};
</script>

<template>
  <Button @click="showToast">show Toast</Button>
</template>