<script setup lang="ts">
import {useSlots} from 'vue';
import Tab from './Tab.vue';

defineProps({
  selected: String
});
const emit = defineEmits<{
  (e: 'update:selected', value: string): void
}>();
if (useSlots().default === undefined) {
  throw new Error('Tabs 子内容不能为空');
}

const defaults = useSlots().default!();
defaults.forEach(ele => {
  if (ele.type !== Tab) {
    throw new Error('Tabs 子标签名必须是 Tab');
  }
});
const titles = defaults.map(ele => ele.props!.title);
const select = (title: string) => {
  emit('update:selected', title);
};
</script>

<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div class="gulu-tabs-nav-item" :class="{selected:title===selected}" v-for="(title,index) in titles" :key="index"
           @click="select(title)">
        {{ title }}
      </div>
    </div>
    <div class="gulu-tabs-content">
      <template v-for="(c,index) in defaults" :key="index">
        <component v-if="c.props.title===selected" class="gulu-tabs-content-item" :is="c"/>
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
    }
  }

  > &-content {
    padding: 8px 0;
  }
}
</style>