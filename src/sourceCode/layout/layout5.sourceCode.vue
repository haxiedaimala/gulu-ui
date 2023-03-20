<sourceCode>
对齐方式
<detail>
  <p>默认使用 <code>flex</code> 布局来对分栏进行灵活的对齐。</p>
  <br/>
  您可以通过 <code>justify</code>属性来定义子元素的排版方式，
  其取值为 <code>start</code>、<code>center</code>、<code>end</code>、
  <code>space-between</code>、<code>space-around</code> 或 <code>space-evenly</code>。
</detail>
</sourceCode>

<script setup lang="ts">
import GRow from '../../components/lib/GRow.vue';
import GCol from '../../components/lib/GCol.vue';
</script>

<template>
  <g-row>
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>
  </g-row>
  <g-row justify="center">
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>
  </g-row>
  <g-row justify="end">
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>
  </g-row>
  <g-row justify="space-between">
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>
  </g-row>
  <g-row justify="space-around">
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>
  </g-row>
  <g-row justify="space-evenly">
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>
    <g-col :span="6"><div class="grid-content gird-bg"/></g-col>
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