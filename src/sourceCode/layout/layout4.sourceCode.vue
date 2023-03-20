<sourceCode>
列偏移
<detail>
  <p>您可以指定列偏移量。</p>
  <br/>
  通过制定 <code>g-col</code> 组件的 <code>offset</code> 属性可以指定分栏偏移的栏数。
</detail>
</sourceCode>

<script setup lang="ts">
import GRow from '../../components/lib/GRow.vue';
import GCol from '../../components/lib/GCol.vue';
</script>

<template>
  <g-row :gutter="20">
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>
    <g-col :span="6" :offset="6"><div class="grid-content gird-bg"/></g-col>
  </g-row>
  <g-row :gutter="20">
    <g-col :span="6" :offset="6"><div class="grid-content grid-bg-light"/></g-col>
    <g-col :span="6" :offset="6"><div class="grid-content gird-bg"/></g-col>
  </g-row>
  <g-row :gutter="20">
    <g-col :span="12" :offset="6"><div class="grid-content grid-bg-light"/></g-col>
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