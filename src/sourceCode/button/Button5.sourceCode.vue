<sourceCode>
支持 loading
<detail>
  <p> 点击按钮来加载数据，并向用户反馈加载状态。</p>
  <p>通过设置 <code>loading</code> 属性为 <code>true</code> 来显示加载中状态</p>
</detail>
</sourceCode>

<script setup lang="ts">
import Button from '../../components/Button.vue';
</script>

<template>
  <Button loading>加载中</Button>
  <Button>加载完毕</Button>
</template>