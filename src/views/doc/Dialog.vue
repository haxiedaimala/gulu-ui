<script setup lang="ts">
import DialogSourceCode1 from '../../sourceCode/dialog/Dialog1.sourceCode.vue'
import DialogSourceCode2 from '../../sourceCode/dialog/Dialog2.sourceCode.vue'
import Demo from '../../components/Demo.vue';
</script>

<template>
  <h1>Dialog 组件示例</h1>
  <Demo :component="DialogSourceCode1"/>
  <Demo :component="DialogSourceCode2"/>
</template>
