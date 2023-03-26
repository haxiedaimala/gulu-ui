<script setup lang="ts">
import {computed} from 'vue';

interface Props {
  title: string,
  name: string,
  disabled: boolean,
  modelValue: string | string[],
  accordion?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  accordion: false
});
const emits = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>();
const toggleCollapse = () => {
  let arr: string[] = [...(props.modelValue as string[])];
  if (props.accordion) {
    arr = arr.indexOf(props.name) >= 0
        ? []
        : [props.name];
  } else {
    arr.indexOf(props.name) >= 0
        ? (arr = arr.filter(item => item !== props.name))
        : arr.push(props.name);
  }
  if (props.disabled) return;
  emits('update:modelValue', arr);
};

const classStyle = computed(() => {
  return {
    ['gulu-collapse-visible']: props.modelValue.indexOf(props.name) >= 0,
    'disabled': props.disabled
  };
});
</script>

<template>
  <div class="gulu-collapse-item" :class="classStyle">
    <div class="gulu-collapse-title" @click="toggleCollapse">
      <template v-if="title">{{ title }}</template>
      <template v-else>
        <slot name="title"/>
      </template>
    </div>
    <div class="gulu-collapse-content">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/helper";

.gulu-collapse-item {
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
</style>