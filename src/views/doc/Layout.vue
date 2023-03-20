<script setup lang="ts">
import Demo from '../../components/Demo.vue';
import LayoutSourceCode1 from '../../sourceCode/layout/layout1.sourceCode.vue';
import LayoutSourceCode2 from '../../sourceCode/layout/layout2.sourceCode.vue';
</script>

<template>
  <h1>Layout 布局</h1>
  <div class="gulu-doc-detail">通过基础的 24 分栏，迅速简便地创建布局。</div>
  <Demo :component="LayoutSourceCode1"/>
  <Demo :component="LayoutSourceCode2"/>
</template>