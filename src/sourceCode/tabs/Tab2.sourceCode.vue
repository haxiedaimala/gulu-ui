<sourceCode>
支持 disabled
<detail>使用 <code>disabled</code>属性，来实现 <code>tab</code>的禁用状态。该属性值接收 <code>Boolean</code>值</detail>
</sourceCode>

<script setup lang="ts">
import Tabs from '../../components/Tabs.vue';
import Tab from '../../components/Tab.vue';
import {ref} from 'vue';

const title = ref('可选导航1');
</script>

<template>
  <Tabs v-model="title">
    <Tab title="可选导航1">内容1</Tab>
    <Tab title="禁止导航2222" disabled>内容2</Tab>
    <Tab title="可选导航333333">内容3</Tab>
  </Tabs>
</template>
