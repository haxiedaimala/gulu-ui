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
  },
  xs: {
    type: Object,
    validator: (value: { span?: string, offset?: string }) => {
      Object.keys(value).forEach(key => {
        if (['span', 'offset'].indexOf(key) < 0) return false;
      });
      return true;
    }
  },
  sm: {
    type: Object,
    validator: (value: { span?: string, offset?: string }) => {
      Object.keys(value).forEach(key => {
        if (['span', 'offset'].indexOf(key) < 0) return false;
      });
      return true;
    }
  },
  md: {
    type: Object,
    validator: (value: { span?: string, offset?: string }) => {
      Object.keys(value).forEach(key => {
        if (['span', 'offset'].indexOf(key) < 0) return false;
      });
      return true;
    }
  },
  lg: {
    type: Object,
    validator: (value: { span?: string, offset?: string }) => {
      Object.keys(value).forEach(key => {
        if (['span', 'offset'].indexOf(key) < 0) return false;
      });
      return true;
    }
  },
  xl: {
    type: Object,
    validator: (value: { span?: string, offset?: string }) => {
      Object.keys(value).forEach(key => {
        if (['span', 'offset'].indexOf(key) < 0) return false;
      });
      return true;
    }
  }
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

  @media (max-width: 768px) {
    $class-prefix: gulu-col-xs-span-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    $class-prefix: gulu-col-xs-offset-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: gulu-col-sm-span-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    $class-prefix: gulu-col-sm-offset-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix: gulu-col-md-span-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    $class-prefix: gulu-col-md-offset-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) and (max-width: 1920px) {
    $class-prefix: gulu-col-lg-span-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    $class-prefix: gulu-col-lg-offset-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }
  @media (min-width: 1921px) {
    $class-prefix: gulu-col-xl-span-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    $class-prefix: gulu-col-xl-offset-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }
}
</style>