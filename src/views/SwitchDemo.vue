<script setup lang="ts">
import SwitchSourceCode1 from '../components/Switch1.sourceCode.vue';
import SwitchSourceCode2 from '../components/Switch2.sourceCode.vue';
import Demo from '../components/Demo.vue';
</script>


<template>
  <h1>Switch 组件示例</h1>
  <Demo :component="SwitchSourceCode1"/>
  <Demo :component="SwitchSourceCode2"/>
</template>
