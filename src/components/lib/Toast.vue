<script setup lang="ts">
import {computed, useSlots} from 'vue';

const props = defineProps({
  autoClose: {
    type: Boolean,
    default: true,
  },
  autoCloseDelay: {
    type: Number,
    default: 3
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  showClose: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'info',
    validator: (value: string) => ['success', 'warning', 'info', 'error'].indexOf(value) >= 0
  },
  enableHtml: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'top',
    validator: (value: string) => ['top', 'center', 'bottom'].indexOf(value) >= 0
  }
});
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();
const close = () => emits('update:modelValue', false);
if (props.autoClose) {
  setTimeout(() => {
    close();
  }, props.autoCloseDelay * 1000);
}
const slotContent = computed(() => useSlots().default!()[0].children);
const classStyle = computed(() => {
  return [
    `gulu-toast-${props.type}`,
    `gulu-toast-${props.position}`
  ];
});
</script>

<template>
  <div class="gulu-toast" :class="classStyle" v-if="modelValue">
    <i class="gulu-iconfont gulu-toast-icon" :class="`g-${type}`"></i>
    <template v-if="enableHtml">
      <div v-html="slotContent"/>
    </template>
    <template v-else>
      <slot/>
    </template>
    <div class="gulu-toast-close" v-if="showClose" @click="close"></div>
  </div>
</template>

<style lang="scss">
@import "../../assets/helper";
@import "iconfont";

@mixin toastType($typeColor:$color-button-info,$num:38) {
  border: 1px solid $typeColor;
  color: $typeColor;
  background-color: lighten($typeColor, $num);
}

.gulu-toast {
  position: fixed;
  z-index: $index-toast;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 1.8;
  padding: 0.3em 1em;
  border-radius: 4px;

  &.gulu-toast-top {
    top: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  &.gulu-toast-bottom {
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  &.gulu-toast-center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &.gulu-toast-info {
    @include toastType($color-button-info);
  }

  &.gulu-toast-success {
    @include toastType($color-button-success);
  }

  &.gulu-toast-warning {
    @include toastType($color-button-warning);
  }

  &.gulu-toast-error {
    @include toastType($color-button-danger, 28);
  }


  &-icon {
    margin-right: 0.5em;
  }

  &-close {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1em;
    width: 1em;
    height: 1em;
    cursor: pointer;

    &::after,
    &::before {
      content: '';
      width: 1px;
      height: 0.8em;
      background-color: $color-button-info;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(135deg);
    }
  }

}
</style>