<sourceCode>
常规使用
<detail>使用<code>theme</code>属性表示不同的按钮状态，实现按钮<code>button</code>、
  链接按钮<code>link</code>、文字按钮<code>text</code>的自由选择
</detail>
</sourceCode>

<script setup lang="ts">
import Button from '../../components/lib/Button.vue';
</script>

<template>
  <Button>按钮</Button>
  <Button theme="link">链接</Button>
  <Button theme="text">文字</Button>
</template>
