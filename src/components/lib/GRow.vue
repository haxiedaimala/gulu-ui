<script setup lang="ts">
import {computed, onMounted, ref, useSlots} from 'vue';
import GCol from './GCol.vue';

const props = defineProps({
  gutter: {
    type: Number,
    default: 0,
    validator: (value: number) => value >= 0
  },
  justify: {
    type: String,
    default: 'start',
    validator: (value: string) => {
      return ['start',
        'center',
        'end',
        'space-between',
        'space-around',
        'space-evenly'
      ].indexOf(value) >= 0;
    }
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

const classStyle = computed(() => {
  return {
    [`gulu-row-${props.justify}`]: props.justify
  };
});
</script>

<template>
  <div class="gulu-layout-row" ref="rowItem" :class="classStyle">
    <slot/>
  </div>
</template>

<style lang="scss">
.gulu-layout-row {
  display: flex;
  justify-content: flex-start;

  &.gulu-row-center {
    justify-content: center;
  }

  &.gulu-row-end {
    justify-content: end;
  }

  &.gulu-row-space-between {
    justify-content: space-between;
  }

  &.gulu-row-space-around {
    justify-content: space-around;
  }

  &.gulu-row-space-evenly {
    justify-content: space-evenly;
  }
}
</style>