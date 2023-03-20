<sourceCode>
分栏间隔
<detail>
  <p>支持列间距。</p>
  <br/>
  行提供 <code>gutter</code> 属性来指定列之间的间距，其默认值为0。
</detail>
</sourceCode>

<script setup lang="ts">
import GRow from '../../components/lib/GRow.vue';
import GCol from '../../components/lib/GCol.vue';
</script>

<template>
  <g-row :gutter="20">
    <g-col :span="6"><div class="grid-content grid-bg-light"/></g-col>
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