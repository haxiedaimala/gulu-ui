<script setup lang="ts">
</script>

<template>
  <div class="gulu-toast">
    <slot/>
  </div>
</template>

<style lang="scss">
@import "../../assets/helper";

.gulu-toast {
  position: fixed;
  top: 20px;
  left: 50%;
  z-index: $index-toast;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1.8;
  padding: 0.3em 1em;
  background-color: #f4f4f5;
  border: 1px solid $color-button-info;
  color: $color-button-info;
  border-radius: 4px;
}
</style>