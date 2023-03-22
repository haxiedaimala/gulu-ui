<script setup lang="ts">
import ToastSourceCode1 from '../../sourceCode/toast/toast1.sourceCode.vue';
import ToastSourceCode2 from '../../sourceCode/toast/toast2.sourceCode.vue';
import ToastSourceCode3 from '../../sourceCode/toast/toast3.sourceCode.vue';
import ToastSourceCode4 from '../../sourceCode/toast/toast4.sourceCode.vue';
import ToastSourceCode5 from '../../sourceCode/toast/toast5.sourceCode.vue';
import ToastSourceCode6 from '../../sourceCode/toast/toast6.sourceCode.vue';
import Demo from '../../components/Demo.vue';
</script>

<template>
  <h1>Toast 组件示例</h1>
  <div class="gulu-doc-detail">常用于主动操作后的反馈提示。</div>
  <Demo :component="ToastSourceCode1"/>
  <Demo :component="ToastSourceCode2"/>
  <Demo :component="ToastSourceCode3"/>
  <Demo :component="ToastSourceCode4"/>
  <Demo :component="ToastSourceCode5"/>
  <Demo :component="ToastSourceCode6"/>
</template>