<script setup lang="ts">
import Demo from '../../components/Demo.vue';
import CollapseSourceCode1 from '../../sourceCode/collapse/collapse1.sourceCode.vue';
import CollapseSourceCode2 from '../../sourceCode/collapse/collapse2.sourceCode.vue';
import CollapseSourceCode3 from '../../sourceCode/collapse/collapse3.sourceCode.vue';
import CollapseSourceCode4 from '../../sourceCode/collapse/collapse4.sourceCode.vue';
</script>

<template>
  <h1>Collapse 折叠面板</h1>
  <div class="gulu-doc-detail">通过折叠面板收纳内容区域。</div>
  <Demo :component="CollapseSourceCode1"/>
  <Demo :component="CollapseSourceCode2"/>
  <Demo :component="CollapseSourceCode3"/>
  <Demo :component="CollapseSourceCode4"/>
</template>