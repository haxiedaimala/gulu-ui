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
}
</style>