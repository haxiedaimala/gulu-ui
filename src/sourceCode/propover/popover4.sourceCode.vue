<sourceCode>
内容可扩展
<detail>
  可以在 <code>Popover</code> 中嵌套其它组件， 以下为嵌套 <code>Tab</code> 的例子。
  <br/>
  利用插槽取代 <code>content</code> 属性
</detail>
</sourceCode>

<script setup lang="ts">
import Popover from '../../components/lib/Popover.vue';
import Button from '../../components/lib/Button.vue';
import Tabs from '../../components/lib/Tabs.vue';
import Tab from '../../components/lib/Tab.vue';
import {ref} from 'vue';

const title = ref('导航1');
</script>

<template>
  <Popover title="Title">
    <Tabs v-model="title">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2222">内容2</Tab>
      <Tab title="导航333333">内容3</Tab>
    </Tabs>
    <template #reference>
      <Button>Hover to activate</Button>
    </template>
  </Popover>
</template>