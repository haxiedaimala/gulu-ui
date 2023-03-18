<script setup lang="ts">
import Demo from '../../components/Demo.vue';
import ButtonSourceCode1 from '../../sourceCode/button/Button1.sourceCode.vue';
import ButtonSourceCode2 from '../../sourceCode/button/Button2.sourceCode.vue';
import ButtonSourceCode3 from '../../sourceCode/button/Button3.sourceCode.vue';
import ButtonSourceCode4 from '../../sourceCode/button/Button4.sourceCode.vue';
import ButtonSourceCode5 from '../../sourceCode/button/Button5.sourceCode.vue';
</script>

<template>
  <h1>Button 组件示例</h1>
  <div class="gulu-doc-detail">常用的操作按钮。</div>
  <Demo :component="ButtonSourceCode1"/>
  <Demo :component="ButtonSourceCode2"/>
  <Demo :component="ButtonSourceCode3"/>
  <Demo :component="ButtonSourceCode4"/>
  <Demo :component="ButtonSourceCode5"/>
</template>