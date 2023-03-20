<script setup lang="ts">
import {useSlots} from 'vue';
import GCol from './GCol.vue';

if (useSlots().default === undefined) throw new Error('GRow 子内容不能为空');
useSlots().default!().forEach(item => {
  if (item.type !== GCol) throw new Error('Grow 的子元素必须是 GCol');
});
</script>

<template>
  <div class="gulu-layout-row">
    <slot/>
  </div>
</template>

<style lang="scss">
.gulu-layout-row {
  display: flex;
}
</style>