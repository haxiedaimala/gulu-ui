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
import GCol from '../../components/lib/GCol.vue';
</script>

<template>
  <g-row>
    <g-col><div class="grid-content gird-bg"/></g-col>
  </g-row>
  <g-row>
    <g-col><div class="grid-content gird-bg"/></g-col>
    <g-col><div class="grid-content grid-bg-light"/></g-col>
  </g-row>
  <g-row>
    <g-col :span="8"><div class="grid-content grid-bg-light"/></g-col>
    <g-col :span="8"><div class="grid-content gird-bg"/></g-col>
    <g-col :span="8"><div class="grid-content grid-bg-light"/></g-col>
  </g-row>
  <g-row>
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>
  </g-row>
  <g-row>
    <g-col :span="4"><div class="grid-content grid-bg-light"/></g-col>
    <g-col :span="4"><div class="grid-content gird-bg"/></g-col>
    <g-col :span="4"><div class="grid-content grid-bg-light"/></g-col>
    <g-col :span="4"><div class="grid-content gird-bg"/></g-col>
    <g-col :span="4"><div class="grid-content grid-bg-light"/></g-col>
    <g-col :span="4"><div class="grid-content gird-bg"/></g-col>
  </g-row>
</template>

<style lang="scss">
.gulu-layout-row {
  margin-bottom: 20px;
}

.gulu-layout-row:last-child {
  margin-bottom: 0;
}

.gulu-layout-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.grid-bg-light {
  background-color: #e5e9f2;
}

.gird-bg {
  background-color: #d3dce6;
}
</style>