<script setup lang="ts">
import {onMounted, ref, useSlots} from 'vue';
import GCol from './GCol.vue';

const props = defineProps({
  gutter: {
    type: Number,
    default: 0,
    validator: (value: number) => value >= 0
  }
});
if (useSlots().default === undefined) throw new Error('GRow 子内容不能为空');
useSlots().default!().forEach(item => {
  if (item.type !== GCol) throw new Error('Grow 的子元素必须是 GCol');
});

const rowItem = ref<HTMLDivElement>();
onMounted(() => {
  if (props.gutter < 0) return;
  const cloList = rowItem.value!.children;
  const length = cloList.length || 0;
  for (let i = 0; i < length - 1; i++) {
    (cloList[i] as HTMLDivElement).style.marginRight = props.gutter + 'px';
  }
});
</script>

<template>
  <div class="gulu-layout-row" ref="rowItem">
    <slot/>
  </div>
</template>

<style lang="scss">
.gulu-layout-row {
  display: flex;
}
</style>