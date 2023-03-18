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
@import "../assets/helper";

.gulu-switch {
  width: $height-normal-switch*2;
  height: $height-normal-switch;
  border: none;
  border-radius: calc(#{$height-normal-switch} / 2);
  background: $color-off-switch;
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
    width: $height-normal-switch-span;
    height: $height-normal-switch-span;
    background: #fff;
    border-radius: calc(#{$height-normal-switch} / 2);
    transition: all 250ms;
  }

  &.gulu-checked {
    background: $color-on-switch;

    > span {
      left: calc(100% - #{$height-normal-switch-span} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $height-normal-switch-span+4px;
    }
  }

  &.gulu-checked:active {
    > span {
      width: $height-normal-switch-span+4px;
      margin-left: -4px;
    }
  }
}
</style>