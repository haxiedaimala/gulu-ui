<sourceCode></sourceCode>

<script setup lang="ts">
import GContainer from '../../components/lib/GContainer.vue';
import GMain from '../../components/lib/GMain.vue';
import GAside from '../../components/lib/GAside.vue';
</script>

<template>
  <g-container>
    <g-aside class="bg" style="width: 200px;"/>
    <g-main class="bg1"/>
  </g-container>
</template>

<style lang="scss">
.bg {
  background-color: #aad0f7;
}

.bg1 {
  background-color: #c6e2ff;
}
</style>