<sourceCode>支持 disabled
<detail>
  <p>你可以使用<code>disabled</code>属性来定义按钮是否被禁用。</p>
  <p>使用 <code>disabled</code> 属性来控制按钮是否为禁用状态。 该属性接受一个 <code>Boolean</code> 类型的值。</p>
</detail>
</sourceCode>

<script setup lang="ts">
import Button from '../../components/Button.vue';
</script>

<template>
  <Button disabled>禁用普通按钮</Button>
  <Button theme="link" disabled>禁用链接按钮</Button>
  <Button theme="text" disabled>禁用文字按钮</Button>
</template>