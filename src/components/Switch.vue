<script setup lang="ts">
import {ref, watchPostEffect} from 'vue';

const props = defineProps({
  modelValue: Boolean,
  disabled: {
    type: Boolean,
    default: false
  },
  style: {
    type: Object
  }
});
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();
const toggleChecked = () => {
  if (props.disabled) return;
  emit('update:modelValue', !props.modelValue);
};
const buttonItem = ref<HTMLButtonElement>();
watchPostEffect(() => {
  if (props.style) {
    buttonItem.value!.style.backgroundColor = props.modelValue ? props.style['--switch-on-color'] : props.style['--switch-off-color'];
  }
});
</script>

<template>
  <button ref="buttonItem" class="gulu-switch" :class="{'gulu-checked':modelValue,disabled:disabled}"
          @click="toggleChecked">
    <span></span>
  </button>
</template>

<style lang="scss">
$h: 22px;
$h2: ($h)-4px;
.gulu-switch {
  width: $h*2;
  height: $h;
  border: none;
  border-radius: calc(#{$h} / 2);
  background: #bfbfbf;
  position: relative;

  & + & {
    margin-left: 8px;
  }

  &.disabled {
    cursor: not-allowed;
  }

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    background: #fff;
    border-radius: calc(#{$h} / 2);
    transition: all 250ms;
  }

  &.gulu-checked {
    background: #1890ff;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2+4px;
    }
  }

  &.gulu-checked:active {
    > span {
      width: $h2+4px;
      margin-left: -4px;
    }
  }
}
</style>