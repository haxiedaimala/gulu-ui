<sourceCode>
常规使用
<detail>
  <p style="font-size:16px;">基础的、简洁的标签页。</p>
  <br/>
  <p><code>Tabs</code> 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 <code>title</code> 属性来指定当前选中的标签页。</p>
</detail>
</sourceCode>

<script setup lang="ts">
import Tabs from '../../components/lib/Tabs.vue';
import Tab from '../../components/lib/Tab.vue';
import {ref} from 'vue';

const title = ref('导航1');
</script>

<template>
  <Tabs v-model="title">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2222">内容2</Tab>
    <Tab title="导航333333">内容3</Tab>
  </Tabs>
</template>
