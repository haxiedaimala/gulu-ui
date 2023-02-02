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
const titles = defaults.map(ele => ele.props!.title);
</script>

<template>
  <div>
    <div v-for="(title,index) in titles" :key="index">{{ title }}</div>
    <component v-for="(c,index) in defaults" :key="index" :is="c"/>
  </div>
</template>

<style lang="scss" scoped>
</style>