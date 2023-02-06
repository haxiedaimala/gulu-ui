<script setup lang="ts">
const props = defineProps({
  value: Boolean,
  disabled: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits<{
  (e: 'update:value', value: boolean): void
}>();
const toggleChecked = () => {
  if (props.disabled) return;
  emit('update:value', !props.value);
};
</script>

<template>
  <button class="gulu-switch" :class="{'gulu-checked':value}" @click="toggleChecked">
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