<script setup lang="ts">
defineProps({
  theme: {
    type: String,
    default: 'button'
  }
});
</script>


<template>
  <button class="gulu-button" :class="{[`theme-${theme}`]:theme}">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
</style>