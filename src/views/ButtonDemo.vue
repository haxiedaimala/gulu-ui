<script setup lang="ts">
import Demo from '../components/Demo.vue'
import ButtonSourceCode1 from '../components/Button1.sourceCode.vue'
import ButtonSourceCode2 from '../components/Button2.sourceCode.vue'
import ButtonSourceCode3 from '../components/Button3.sourceCode.vue'
import ButtonSourceCode4 from '../components/Button4.sourceCode.vue'
import ButtonSourceCode5 from '../components/Button5.sourceCode.vue'
</script>

<template>
  <h1>Button 组件示例</h1>
  <Demo :component="ButtonSourceCode1"/>
  <Demo :component="ButtonSourceCode2"/>
  <Demo :component="ButtonSourceCode3"/>
  <Demo :component="ButtonSourceCode4"/>
  <Demo :component="ButtonSourceCode5"/>
</template>

<style lang="scss" scoped>
</style>