<script setup lang="ts">
</script>

<template>
  <button><span></span></button>
</template>

<style lang="scss" scoped>
$h: 22px;
$h2: ($h)-4px;
button {
  width: $h*2;
  height: $h;
  border: none;
  border-radius: $h/2;
  background: blue;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    background: #fff;
    border-radius: $h2/2;
  }
}
</style>