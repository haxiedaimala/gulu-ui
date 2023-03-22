<sourceCode>
位置选择
<detail>支持 <code>Toast</code> 的位置选择，属性值分别为：默认值 <code>Top</code>、<code>center</code>、<code>bottom</code></detail>
</sourceCode>

<script setup lang="ts">
import Button from '../../components/lib/Button.vue';
import {openToast} from '../../components/lib/openToast';

const open = () => {
  openToast({
    message: `<p>您需要进行充值，当前余额为 ${Math.floor(Math.random() * 100) + 1}</p>`,
    enableHtml: true,
  });
};
const open2 = () => {
  openToast({
    message: `<p>您需要进行充值，当前余额为 ${Math.floor(Math.random() * 100) + 1}</p>`,
    enableHtml: true,
    position: 'bottom',
  });
};
const open3 = () => {
  openToast({
    message: `<p>您需要进行充值，当前余额为 ${Math.floor(Math.random() * 100) + 1}</p>`,
    enableHtml: true,
    position: 'center',
  });
};
</script>

<template>
  <Button @click="open">Toast Top</Button>
  <Button @click="open2">Toast Bottom</Button>
  <Button @click="open3">Toast Center</Button>
</template>