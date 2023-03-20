<script setup lang="ts">
import Demo from '../../components/Demo.vue';
import LayoutSourceCode1 from '../../sourceCode/layout/layout1.sourceCode.vue';
import LayoutSourceCode2 from '../../sourceCode/layout/layout2.sourceCode.vue';
import LayoutSourceCode3 from '../../sourceCode/layout/layout3.sourceCode.vue';
import LayoutSourceCode4 from '../../sourceCode/layout/layout4.sourceCode.vue';
import LayoutSourceCode5 from '../../sourceCode/layout/layout5.sourceCode.vue';
import LayoutSourceCode6 from '../../sourceCode/layout/layout6.sourceCode.vue';
</script>

<template>
  <h1>Layout 布局</h1>
  <div class="gulu-doc-detail">通过基础的 24 分栏，迅速简便地创建布局。</div>
  <Demo :component="LayoutSourceCode1"/>
  <Demo :component="LayoutSourceCode2"/>
  <Demo :component="LayoutSourceCode3"/>
  <Demo :component="LayoutSourceCode4"/>
  <Demo :component="LayoutSourceCode5"/>
  <Demo :component="LayoutSourceCode6"/>
</template>