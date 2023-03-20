<sourceCode></sourceCode>

<script setup lang="ts">
import GContainer from '../../components/lib/GContainer.vue';
import GHeader from '../../components/lib/GHeader.vue';
import GMain from '../../components/lib/GMain.vue';
import GFooter from '../../components/lib/GFooter.vue';
import GAside from '../../components/lib/GAside.vue';
</script>

<template>
  <g-container>
    <g-aside class="bg1" style="width: 200px;"/>
    <g-container>
      <g-header class="bg"/>
      <g-main class="bg2"/>
      <g-footer class="bg3"/>
    </g-container>
  </g-container>
</template>

<style lang="scss">
.bg {
  background-color: #aad0f7;
}

.bg1 {
  background-color: #d9ecff;
}

.bg2 {
  background-color: #ecf5ff;
}

.bg3 {
  background-color: #c6e2ff;
}
</style>