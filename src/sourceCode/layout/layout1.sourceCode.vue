<sourceCode>
常规用法
<detail>
  <p>使用列创建基础网格布局。</p>
  <br/>
  通过 <code>row</code> 和 <code>col</code> 组件，并通过 <code>col</code> 组件的 <code>span</code> 属性我们就可以自由地组合布局。
</detail>
</sourceCode>

<script setup lang="ts">
import GRow from '../../components/lib/GRow.vue';
</script>

<template>
  <g-row>
    <g-col></g-col>
    <g-col></g-col>
  </g-row>
</template>