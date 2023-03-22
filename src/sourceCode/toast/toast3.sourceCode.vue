<sourceCode>
可关闭的消息提示
<detail>
  <p>可以添加关闭按钮。</p>
  <p> 默认不可以被人工关闭的。如果你需要手动关闭功能，你可以把 <code>showClose</code> 设置为 <code>true</code>。</p>
  <p>此外拥有可控的 <code>autoClose</code>，当把这个属性的值设置为 <code>false</code> 便表示该消息不会被自动关闭。</p>
</detail>
</sourceCode>

<script setup lang="ts">
import Button from '../../components/lib/Button.vue';
import {openToast} from '../../components/lib/openToast';

const showToast = () => {
  openToast({
    message: 'hello',
    showClose: true,
    autoClose:false
  });
};
</script>

<template>
  <Button @click="showToast">show Toast</Button>
</template>