<sourceCode>
响应式布局
<detail>
  参照了 <code>Bootstrap</code> 的 响应式设计，预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code> 和 <code>xl</code>。
</detail>
</sourceCode>

<script setup lang="ts">
import GRow from '../../components/lib/GRow.vue';
import GCol from '../../components/lib/GCol.vue';
</script>

<template>
  <g-row>
    <g-col :xs="{span:8}" :md="{span:4}" :lg="{span:3}" :xl="{span:1}">
      <div class="grid-content gird-bg"/>
    </g-col>
    <g-col :xs="{span:4}" :md="{span:8}" :lg="{span:9}" :xl="{span:11}">
      <div class="grid-content grid-bg-light"/>
    </g-col>
    <g-col :xs="{span:4}" :md="{span:8}" :lg="{span:9}" :xl="{span:11}">
      <div class="grid-content gird-bg"/>
    </g-col>
    <g-col :xs="{span:8}" :md="{span:4}" :lg="{span:3}" :xl="{span:1}">
      <div class="grid-content grid-bg-light"/>
    </g-col>
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