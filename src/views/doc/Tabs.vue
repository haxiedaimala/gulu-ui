<script setup lang="ts">
import TabSourceCode1 from '../../sourceCode/tabs/Tab1.sourceCode.vue';
import TabSourceCode2 from '../../sourceCode/tabs/Tab2.sourceCode.vue';
import Demo from '../../components/Demo.vue';
</script>

<template>
  <h1>Tabs 组件示例</h1>
  <div class="gulu-doc-detail">分隔内容上有关联但属于不同类别的数据集合。</div>
  <Demo :component="TabSourceCode1"/>
  <Demo :component="TabSourceCode2"/>
</template>