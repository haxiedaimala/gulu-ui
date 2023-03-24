<script setup lang="ts">
import CollapseItem from './CollapseItem.vue';
import {useSlots} from 'vue';

interface Props {
  modelValue: string[],
  accordion?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  accordion: false
});
const emits = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>();

if (!useSlots().default) throw new Error('Collapse 组件内容不为空');
const slots = useSlots().default!();
slots.forEach(node => {
  if (node.type !== CollapseItem) throw new Error('Collapse 组件的子组件名必须是 CollapseItem');
});

const toggleCollapse = (obj: { name: string, title: string, disabled: boolean }) => {
  const value = obj.name;
  let arr: string[] = [...props.modelValue];
  if (props.accordion) {
    arr = arr.indexOf(value) >= 0
        ? []
        : [value];
  } else {
    arr.indexOf(value) >= 0
        ? (arr = arr.filter(item => item !== value))
        : arr.push(value);
  }
  if (obj.disabled) return;
  emits('update:modelValue', arr);
};
</script>

<template>
  <div class="gulu-collapse">
    <div class="gulu-collapse-item"
         v-for="(component,index) in slots"
         :key="index"
         :class="{['gulu-collapse-visible']: props.modelValue.indexOf(component.props.name) >= 0,'disabled':component.props.disabled===true}"
    >
      <div class="gulu-collapse-title" @click="toggleCollapse(component.props)">
        {{ component.props.title }}
      </div>
      <div class="gulu-collapse-content">
        <component :is="component"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/helper";

.gulu-collapse {
  border: 1px solid $color-border;
  border-radius: 4px;

  &-item {
    padding: 0 1em;

    .gulu-collapse-title {
      display: flex;
      align-items: center;
      padding: 0.8em 0;
      cursor: pointer;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0, -50%) rotate(45deg);
        width: 0.5em;
        height: 0.5em;
        border: 1px solid transparent;
        border-top-color: inherit;
        border-right-color: inherit;
        transition: all 250ms;
      }
    }

    .gulu-collapse-content {
      height: 0;
      overflow: hidden;
      transition: all 250ms;
      border-bottom: 1px solid $color-border;
    }

    &:last-child {
      .gulu-collapse-content {
        border-bottom: none;
      }
    }

    &.gulu-collapse-visible {
      .gulu-collapse-title {
        &::after {
          transform: translate(0, -50%) rotate(135deg);
        }
      }

      .gulu-collapse-content {
        padding: 1em 0;
        height: auto;
      }
    }

    &.disabled {
      .gulu-collapse-title {
        color: darken($color-border, 20%);
        cursor: not-allowed;
      }

      .gulu-collapse-content {
        color: darken($color-border, 20%);
      }
    }
  }
}
</style>