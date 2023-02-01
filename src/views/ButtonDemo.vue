<script setup lang="ts">
import Button from '../components/Button.vue'

const onClick=()=>{
  console.log('hi');
}
</script>

<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button size="大"  @click="onClick" @focus="onClick" @mouseover="onClick">你好</Button>
  </div>
</template>

<style lang="scss" scoped>
</style>