<script setup lang="ts">
import GAside from './GAside.vue';
import {ref, useSlots} from 'vue';

const hasAside = ref(false);
const slots = useSlots().default!();
slots.forEach(item => {
  if (item.type === GAside) hasAside.value = true;
});
</script>

<template>
  <div class="gulu-container" :class="{[`gulu-container-hasAside`]:hasAside}">
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