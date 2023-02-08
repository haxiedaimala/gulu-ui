<sourceCode>支持 disabled</sourceCode>

<script setup lang="ts">
import Button from '../../components/Button.vue';
</script>

<template>
  <Button disabled>禁用普通按钮</Button>
  <Button theme="link" disabled>禁用链接按钮</Button>
  <Button theme="text" disabled>禁用文字按钮</Button>
</template>