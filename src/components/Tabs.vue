<script setup lang="ts">
import {useSlots} from 'vue';
import Tab from './Tab.vue';

if (useSlots().default === undefined) {
  throw new Error('Tabs 子内容不能为空');
}

const defaults = useSlots().default!();
defaults.forEach(ele => {
  if (ele.type !== Tab) {
    throw new Error('Tabs 子标签名必须是 Tab');
  }
});

</script>

<template>
  <div>
    tabs
    <component v-for="(c,index) in defaults" :key="index" :is="c"/>
  </div>
</template>

<style lang="scss" scoped>
</style>