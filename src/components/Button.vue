<script lang="ts">
export default {
  inheritAttrs: false
};
</script>
<script setup lang="ts">
import {useAttrs} from 'vue';

const {size, ...rest} = useAttrs();
</script>


<template>
  <div>
    <button v-bind="rest">
      <slot/>
    </button>
  </div>
</template>

<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>