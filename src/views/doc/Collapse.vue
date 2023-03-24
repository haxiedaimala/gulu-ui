<script setup lang="ts">
import Demo from '../../components/Demo.vue';
import CollapseSourceCode1 from '../../sourceCode/collapse/collapse1.sourceCode.vue';
</script>

<template>
  <h1>Collapse 折叠面板</h1>
  <div class="gulu-doc-detail">通过折叠面板收纳内容区域。</div>
  <Demo :component="CollapseSourceCode1"/>
</template>