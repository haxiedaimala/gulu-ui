<sourceCode>
自定义宽度
<detail>
  <code>width</code> 属性被用来决定 <code>popover</code> 的的宽地，默认随内容撑开，属性值为 <code>Number</code> 类型
</detail>
</sourceCode>

<script setup lang="ts">
import Popover from '../../components/lib/Popover.vue';
import Button from '../../components/lib/Button.vue';
</script>

<template>
  <Popover title="Title"
           content="this is content,this is content,this is content"
  >
    <template #reference>
      <Button>activate</Button>
    </template>
  </Popover>

  <Popover title="Title"
           :width="200"
           content="this is content,this is content,this is content"
  >
    <template #reference>
      <Button>Width activate</Button>
    </template>
  </Popover>
</template>