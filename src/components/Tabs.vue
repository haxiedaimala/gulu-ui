<script setup lang="ts">
//@ts-nocheck
import {ref, useSlots, watchPostEffect} from 'vue';
import Tab from './Tab.vue';

defineProps({
  selected: String
});
const emit = defineEmits<{
  (e: 'update:selected', value: string): void
}>();
const defaults = useSlots().default!();
const titles = defaults.map(ele => ele.props?.title);
const selectedItem = ref<HTMLDivElement>();
const indicator = ref<HTMLDivElement>();
const container = ref<HTMLDivElement>();
const disabled = (title: string) => {
  return defaults.filter(ele => ele.props?.title === title)[0].props?.disabled !== undefined;
};
if (useSlots().default === undefined) {
  throw new Error('Tabs 子内容不能为空');
}
defaults.forEach(ele => {
  if (ele.type !== Tab) {
    throw new Error('Tabs 子标签名必须是 Tab');
  }
});
const toggleSelect = (title: string) => {
  if (disabled(title)) {
    return;
  }
  emit('update:selected', title);
};
watchPostEffect(() => {
  const {width, left: left1} = selectedItem.value!.getBoundingClientRect();
  //设置 indicator 的 width，根据被选中的 div 的 width
  indicator.value!.style.width = width + 'px';
  const {left: left2} = container.value!.getBoundingClientRect();
  //设置 indicator 的 left，是被选中div的left-container的left
  indicator.value!.style.left = (left1 - left2) + 'px';
});
</script>

<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div class="gulu-tabs-nav-item" :class="{selected:title===selected,readOnly:disabled(title)}"
           v-for="(title,index) in titles"
           :key="index"
           @click="toggleSelect(title)" :ref="el=>{if(title===selected) selectedItem=el}">
        {{ title }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <template v-for="(c,index) in defaults" :key="index">
        <component v-if="c.props!==null&&c.props.title===selected" class="gulu-tabs-content-item" :is="c"/>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
  > &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    > &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }

      &.readOnly {
        color: #bfbfbf;
        cursor: not-allowed;
      }
    }

    > &-indicator {
      position: absolute;
      left: 0;
      bottom: -1px;
      height: 3px;
      width: 100px;
      background: $blue;
      transition: all 250ms;
    }
  }

  > &-content {
    padding: 8px 0;
  }
}
</style>