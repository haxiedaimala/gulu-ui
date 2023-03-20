<script setup lang="ts">
</script>

<template>
  <div class="gulu-container-main">
    <slot/>
  </div>
</template>

<style lang="scss">
.gulu-container-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  text-align: center;
  overflow: auto;
}
</style>