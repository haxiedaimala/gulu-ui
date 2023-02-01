<script setup lang="ts">
import Button from '../components/Button.vue'
</script>

<template>
  <div>Button 示例</div>
  <h2>示例1</h2>
  <div>
    <Button>默认</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文字</Button>
  </div>
  <h2>示例2</h2>
  <div>
    <Button size="big">大大</Button>
    <Button>普通</Button>
    <Button size="small">小小</Button>
  </div>
</template>

<style lang="scss" scoped>
</style>