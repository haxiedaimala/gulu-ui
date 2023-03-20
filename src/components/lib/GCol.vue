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

const {span, offset, xs, sm, md, lg, xl} = defineProps({
  span: {type: Number, validator: spanOffsetValidator},
  offset: {type: Number, validator: spanOffsetValidator},
  xs: {type: Object, validator: layoutValidator},
  sm: {type: Object, validator: layoutValidator},
  md: {type: Object, validator: layoutValidator},
  lg: {type: Object, validator: layoutValidator},
  xl: {type: Object, validator: layoutValidator}
});
const createClass = (obj: any, str: string = ''): string[] => {
  if (!obj) return [];
  let array = [];
  if (obj.span) array.push(`gulu-col-${str}span-${obj.span}`);
  if (obj.offset) array.push(`gulu-col-${str}offset-${obj.offset}`);
  return array;
};
const classStyle = computed(() => {
  return [
    ...createClass({span, offset}),
    ...createClass(xs, 'xs-'),
    ...createClass(sm, 'sm-'),
    ...createClass(md, 'md-'),
    ...createClass(lg, 'lg-'),
    ...createClass(xl, 'xl-'),
  ];
});
</script>

<template>
  <div class="gulu-layout-col" :class="classStyle">
    <slot/>
  </div>
</template>

<style lang="scss">
@mixin span-offset-classes($class-prefix-span:gulu-col-span-,$class-prefix-offset:gulu-col-offset-) {
  @for $i from 1 through 24 {
    &.#{$class-prefix-span}#{$i} {
      width: calc(#{$i} / 24 * 100%) ;
    }
  }
  @for $i from 1 through 24 {
    &.#{$class-prefix-offset}#{$i} {
      margin-left: calc(#{$i} / 24 * 100%) ;
    }
  }
}

.gulu-layout-col {
  max-width: 100%;

  @include span-offset-classes(gulu-col-span-, gulu-col-offset-);
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