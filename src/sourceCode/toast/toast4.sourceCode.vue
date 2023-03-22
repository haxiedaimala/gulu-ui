<sourceCode>
不同状态
<detail>
  设置 <code>type</code> 字段可以定义不同的状态，属性值为：<code>info</code>(默认) <code>success</code> <code>warning</code>
  <code>error</code>。
</detail>
</sourceCode>

<script setup lang="ts">
import Button from '../../components/lib/Button.vue';
import {openToast} from '../../components/lib/openToast';

const open = () => {
  openToast({
    message: 'hello'
  });
};
const open2 = () => {
  openToast({
    message: 'hello',
    type: 'success'
  });
};
const open3 = () => {
  openToast({
    message: 'hello',
    type: 'warning'
  });
};
const open4 = () => {
  openToast({
    message: 'hello',
    type: 'error',
  });
};
</script>

<template>
  <Button @click="open">info</Button>
  <Button @click="open2">success</Button>
  <Button @click="open3">warning</Button>
  <Button @click="open4">error</Button>
</template>