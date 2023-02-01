<script setup lang="ts">
import Button from '../components/Button.vue';
</script>

<template>
  <div>Button 示例</div>
  <h2>示例1</h2>
  <div>
    <Button>按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文字</Button>
  </div>
  <h2>示例2</h2>
  <div>
    <div>
      <Button size="big">大大</Button>
      <Button>普通</Button>
      <Button size="small">小小</Button>
    </div>
    <div>
      <Button theme="link" size="big">大大</Button>
      <Button theme="link">普通</Button>
      <Button theme="link" size="small">小小</Button>
    </div>
    <div>
      <Button theme="text" size="big">大大</Button>
      <Button theme="text">普通</Button>
      <Button theme="text" size="small">小小</Button>
    </div>
  </div>
  <h2>示例3</h2>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
  <h2>示例4</h2>
  <div>
    <Button disabled>禁用普通按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文字按钮</Button>
  </div>
  <h2>示例5</h2>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<style lang="scss" scoped>
</style>