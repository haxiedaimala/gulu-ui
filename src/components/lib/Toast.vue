<script setup lang="ts">
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
</script>

<template>
  <div class="gulu-toast" v-if="modelValue">
    <slot/>
    <div class="gulu-toast-close" v-if="showClose" @click="close"></div>
  </div>
</template>

<style lang="scss">
@import "../../assets/helper";

.gulu-toast {
  position: fixed;
  top: 20px;
  left: 50%;
  z-index: $index-toast;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1.8;
  padding: 0.3em 1em;
  background-color: #f4f4f5;
  border: 1px solid $color-button-info;
  color: $color-button-info;
  border-radius: 4px;

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