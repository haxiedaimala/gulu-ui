<script setup lang="ts">
import GAside from './GAside.vue';
import {computed, ref, useSlots} from 'vue';

const hasAside = ref(false);
const slots = useSlots().default!();
slots.forEach(item => {
  if (item.type === GAside) hasAside.value = true;
});
const classStyle = computed(() => {
  return {
    [`gulu-container-hasAside`]: hasAside.value
  };
});
</script>

<template>
  <div class="gulu-container" :class="classStyle">
    <slot/>
  </div>
</template>

<style lang="scss">
.gulu-container {
  display: flex;
  flex: 1;
  flex-direction: column;

  &.gulu-container-hasAside {
    flex-direction: row;
  }
}
</style>