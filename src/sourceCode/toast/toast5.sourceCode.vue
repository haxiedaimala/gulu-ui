<sourceCode>
使用 HTML 片段作为正文内容
<detail>
  <p><code>Toast</code> 还支持使用 HTML 字符串作为正文内容。</p>
  <br/>
  <p style="font-size: 14px;">将 <code>enableHtml</code> 属性设置为 <code>true</code>,<code>message</code> 就会被当作 HTML 片段处理。
  </p>
</detail>
</sourceCode>

<script setup lang="ts">
import Button from '../../components/lib/Button.vue';
import {openToast} from '../../components/lib/openToast';

const open = () => {
  openToast({
    message: '<strong>This is <i>HTML</i> string</strong>',
    enableHtml: true
  });
};
</script>

<template>
  <Button @click="open">Use HTML String</Button>
</template>