<script lang="ts">
const spanOffsetValidator = (value: number) => value >= 1 && value <= 24;
const layoutValidator = (object: { span?: string, offset?: string }) => {
  let valida = true;
  Object.keys(object).forEach(key => {
    if (['span', 'offset'].indexOf(key) === -1) valida = false;
  });
  Object.values(object).forEach(value => {
    if (parseInt(value) < 0 || parseInt(value) > 24) valida = false;
  });
  return valida;
};
export default {};
</script>
<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps({
  span: {type: Number, validator: spanOffsetValidator},
  offset: {type: Number, validator: spanOffsetValidator},
  xs: {type: Object, validator: layoutValidator},
  sm: {type: Object, validator: layoutValidator},
  md: {type: Object, validator: layoutValidator},
  lg: {type: Object, validator: layoutValidator},
  xl: {type: Object, validator: layoutValidator}
});
const classStyle = computed(() => {
  return {
    [`gulu-layout-col-span-${props.span}`]: props.span,
    [`gulu-layout-col-offset-${props.offset}`]: props.offset,
    [`gulu-col-xs-span-${props.xs?.span}`]: props.xs && props.xs.span,
    [`gulu-col-xs-offset-${props.xs?.offset}`]: props.xs && props.xs.offset,
    [`gulu-col-md-span-${props.md?.span}`]: props.md && props.md.span,
    [`gulu-col-md-offset-${props.md?.offset}`]: props.md && props.md.offset,
    [`gulu-col-sm-span-${props.sm?.span}`]: props.sm && props.sm.span,
    [`gulu-col-sm-offset-${props.sm?.offset}`]: props.sm && props.sm.offset,
    [`gulu-col-lg-span-${props.lg?.span}`]: props.lg && props.lg.span,
    [`gulu-col-lg-offset-${props.lg?.offset}`]: props.lg && props.lg.offset,
    [`gulu-col-xl-span-${props.xl?.span}`]: props.xl && props.xl.span,
    [`gulu-col-xl-offset-${props.xl?.offset}`]: props.xl && props.xl.offset,
  };
});
</script>

<template>
  <div class="gulu-layout-col" :class="classStyle">
    <slot/>
  </div>
</template>

<style lang="scss">
@mixin span-offset-classes($class-prefix-span:gulu-layout-col-span-,$class-prefix-offset:gulu-layout-col-offset-) {
  @for $i from 1 through 24 {
    &.#{$class-prefix-span}#{$i} {
      width: ($i / 24) * 100%;
    }
  }
  @for $i from 1 through 24 {
    &.#{$class-prefix-offset}#{$i} {
      margin-left: ($i / 24) * 100%;
    }
  }
}

.gulu-layout-col {
  width: 100%;

  @include span-offset-classes(gulu-layout-col-span-, gulu-layout-col-offset-);
  @include span-offset-classes(gulu-col-xs-span-, gulu-col-xs-offset-);

  @media (min-width: 768px) {
    @include span-offset-classes(gulu-col-sm-span-, gulu-col-sm-offset-);
  }
  @media (min-width: 992px) {
    @include span-offset-classes(gulu-col-md-span-, gulu-col-md-offset-);
  }
  @media (min-width: 1200px) {
    @include span-offset-classes(gulu-col-lg-span-, gulu-col-lg-offset-);
  }
  @media (min-width: 1920px) {
    @include span-offset-classes(gulu-col-xl-span-, gulu-col-xl-offset-);
  }
}
</style>