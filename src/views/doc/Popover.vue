<script setup lang="ts">
import Demo from '../../components/Demo.vue';
import popoverSourceCode1 from '../../sourceCode/propover/popover1.sourceCode.vue';
import popoverSourceCode2 from '../../sourceCode/propover/popover2.sourceCode.vue';
import popoverSourceCode3 from '../../sourceCode/propover/popover3.sourceCode.vue';
import popoverSourceCode4 from '../../sourceCode/propover/popover4.sourceCode.vue';
</script>

<template>
  <h1>Popover 气泡卡片</h1>
  <Demo :component="popoverSourceCode2"/>
  <Demo :component="popoverSourceCode1"/>
  <Demo :component="popoverSourceCode3"/>
  <Demo :component="popoverSourceCode4"/>
</template>