<script setup lang="ts">
import {ref} from 'vue';

const checked = ref(false);
const toggleChecked = () => {
  checked.value = !checked.value;
};
</script>

<template>
  <button :class="{checked:checked}" @click="toggleChecked">
    <span></span>
  </button>
</template>

<style lang="scss" scoped>
$h: 22px;
$h2: ($h)-4px;
button {
  width: $h*2;
  height: $h;
  border: none;
  border-radius: $h/2;
  background: grey;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    background: #fff;
    border-radius: $h2/2;
    transition: all 250ms;
  }

  &.checked {
    background: blue;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }
}
</style>