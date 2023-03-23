<sourceCode>
常规用法
<detail>
  <code>trigger</code> 属性被用来决定 <code>popover</code> 的触发方式，
  支持的触发方式： <code>hover</code>、<code>click</code>、<code>focus</code> 或 <code>contextmenu</code>。 如果你想手动控制它，可以设置 <code>:visible</code>
  属性。
</detail>
</sourceCode>

<script setup lang="ts">
import Popover from '../../components/lib/Popover.vue';
import Button from '../../components/lib/Button.vue';
</script>

<template>
  <Popover title="Title"
           :width="200"
           content="this is content,this is content,this is content"
  >
    <template #reference>
      <Button>Hover to activate</Button>
    </template>
  </Popover>
</template>