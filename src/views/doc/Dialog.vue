<script setup lang="ts">
import DialogSourceCode1 from '../../sourceCode/dialog/Dialog1.sourceCode.vue';
import DialogSourceCode2 from '../../sourceCode/dialog/Dialog2.sourceCode.vue';
import DialogSourceCode3 from '../../sourceCode/dialog/Dialog3.sourceCode.vue';
import DialogSourceCode4 from '../../sourceCode/dialog/Dialog4.sourceCode.vue';
import DialogSourceCode5 from '../../sourceCode/dialog/Dialog5.sourceCode.vue';
import DialogSourceCode6 from '../../sourceCode/dialog/Dialog6.sourceCode.vue';
import Demo from '../../components/Demo.vue';
</script>

<template>
  <h1>Dialog 组件示例</h1>
  <div class="gulu-doc-detail">在保留当前页面状态的情况下，告知用户并承载相关操作。</div>
  <Demo :component="DialogSourceCode1"/>
  <Demo :component="DialogSourceCode6"/>
  <Demo :component="DialogSourceCode5"/>
  <Demo :component="DialogSourceCode4"/>
  <Demo :component="DialogSourceCode3"/>
  <Demo :component="DialogSourceCode2"/>
</template>
