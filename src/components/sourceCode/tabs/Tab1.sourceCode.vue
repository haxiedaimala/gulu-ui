<sourceCode>常规使用</sourceCode>

<script setup lang="ts">
import Tabs from '../../Tabs.vue';
import Tab from '../../Tab.vue';
import {ref} from 'vue';

const title = ref('导航1');
</script>

<template>
  <Tabs v-model:selected="title">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2222">内容2</Tab>
    <Tab title="导航333333">内容3</Tab>
  </Tabs>
</template>
