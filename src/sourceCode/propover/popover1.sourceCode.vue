<sourceCode>
多种展示位置
<detail>
  <code>position</code> 属性被用来决定 <code>popover</code> 的触发位置，
  触发位置有： <code>top</code>（默认位置）、<code>bottom</code>、<code>left</code>、<code>right</code>
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
      <Button>Top popover</Button>
    </template>
  </Popover>
  <Popover title="Title"
           position="bottom"
           content="this is content,this is content,this is content"
  >
    <template #reference>
      <Button>Bottom popover</Button>
    </template>
  </Popover>
  <Popover title="Title"
           position="left"
           content="this is content,this is content,this is content"
  >
    <template #reference>
      <Button>Left popover</Button>
    </template>
  </Popover>
  <Popover title="Title"
           position="right"
           content="this is content,this is content,this is content"
  >
    <template #reference>
      <Button>Right popover</Button>
    </template>
  </Popover>
</template>