<sourceCode>
常规用法
<detail>
  <code>trigger</code> 属性被用来决定 <code>popover</code> 的触发方式，
  支持的触发方式： <code>hover</code>、<code>click</code>、<code>focus</code>
</detail>
</sourceCode>

<script setup lang="ts">
import Popover from '../../components/lib/Popover.vue';
import Button from '../../components/lib/Button.vue';
</script>

<template>
  <Popover title="Title"
           trigger="hover"
           content="this is content,this is content,this is content"
  >
    <template #reference>
      <Button>Hover to activate</Button>
    </template>
  </Popover>
  <Popover title="Title"
           trigger="click"
           content="this is content,this is content,this is content"
  >
    <template #reference>
      <Button>Click to activate</Button>
    </template>
  </Popover>
  <Popover title="Title"
           trigger="focus"
           content="this is content,this is content,this is content"
  >
    <template #reference>
      <Button>Focus to activate</Button>
    </template>
  </Popover>
</template>