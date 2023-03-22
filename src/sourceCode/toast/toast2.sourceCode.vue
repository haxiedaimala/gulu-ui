<sourceCode>
延时关闭时间
<detail>支持自定义组件的关闭时间，<code>autoCloseDelay</code>实现 <code>Toast</code>的关闭时间。该属性接收一个 <code>Number</code>类型的值</detail>
</sourceCode>

<script setup lang="ts">
import Button from '../../components/lib/Button.vue';
import {openToast} from '../../components/lib/openToast';

const showToast = () => {
  openToast({
    message: 'hello',
    autoCloseDelay: 5
  });
};
</script>

<template>
  <Button @click="showToast">show Toast</Button>
</template>