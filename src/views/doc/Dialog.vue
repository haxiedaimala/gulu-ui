<script setup lang="ts">
import DialogSourceCode1 from '../../sourceCode/dialog/Dialog1.sourceCode.vue';
import DialogSourceCode2 from '../../sourceCode/dialog/Dialog2.sourceCode.vue';
import Demo from '../../components/Demo.vue';
</script>

<template>
  <h1>Dialog 组件示例</h1>
  <div class="gulu-doc-detail">在保留当前页面状态的情况下，告知用户并承载相关操作。</div>
  <Demo :component="DialogSourceCode1"/>
  <Demo :component="DialogSourceCode2"/>
</template>
