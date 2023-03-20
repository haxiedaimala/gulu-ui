<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps({
  span: {
    type: Number,
    validator: (value: number) => value >= 1 && value <= 24
  },
  offset: {
    type: Number,
    validator: (value: number) => value >= 1 && value <= 24
  }
});
const classStyle = computed(() => {
  return {
    [`gulu-layout-col-span-${props.span}`]: props.span,
    [`gulu-layout-col-offset-${props.offset}`]: props.offset
  };
});
</script>

<template>
  <div class="gulu-layout-col" :class="classStyle">
    <slot/>
  </div>
</template>

<style lang="scss">
.gulu-layout-col {
  width: 100%;

  $class-prefix: gulu-layout-col-span-;
  @for $i from 1 through 24 {
    &.#{$class-prefix}#{$i} {
      width: ($i / 24) * 100%;
    }
  }
  $class-prefix: gulu-layout-col-offset-;
  @for $i from 1 through 24 {
    &.#{$class-prefix}#{$i} {
      margin-left: ($i / 24) * 100%;
    }
  }
}
</style>