<sourceCode>
常见页面布局
<detail>可同时展开多个面板，面板之间不影响</detail>
</sourceCode>

<script setup lang="ts">
import Collapse from '../../components/lib/Collapse.vue';
import CollapseItem from '../../components/lib/CollapseItem.vue';
</script>

<template>
  <Collapse>
    <CollapseItem>collapse</CollapseItem>
  </Collapse>
</template>

<style lang="scss">
</style>