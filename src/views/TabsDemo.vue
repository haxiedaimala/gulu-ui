<script setup lang="ts">
import Tabs from '../components/Tabs.vue';
import Tab from '../components/Tab.vue';
import {ref} from 'vue';

const title = ref('导航1');
</script>

<template>
  <div>Tabs 示例</div>
  <h2>示例1</h2>
  <Tabs v-model:selected="title">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2222">内容2</Tab>
    <Tab title="导航333333">内容3</Tab>
  </Tabs>
</template>

<style lang="scss" scoped>
</style>