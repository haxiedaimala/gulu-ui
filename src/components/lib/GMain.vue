<script setup lang="ts">
</script>

<template>
  <div class="gulu-container-main">
    <slot/>
  </div>
</template>

<style lang="scss">
.gulu-container-main {
  flex-grow: 1;
  height: 150px;
  overflow: auto;
}
</style>