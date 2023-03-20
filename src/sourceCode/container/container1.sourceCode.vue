<sourceCode>
常见页面布局
</sourceCode>

<script setup lang="ts">
import GContainer from '../../components/lib/GContainer.vue';
import GHeader from '../../components/lib/GHeader.vue';
import GMain from '../../components/lib/GMain.vue';
import GFooter from '../../components/lib/GFooter.vue';
</script>

<template>
  <g-container>
    <g-header class="container-bg">Header</g-header>
    <g-main class="container-bg-light">Main</g-main>
    <g-footer class="container-bg-light2">Footer</g-footer>
  </g-container>
</template>

<style lang="scss">
.container-bg-light2 {
  background-color: #ecf5ff;
}

.container-bg-light {
  background-color: #d9ecff;
}

.container-bg {
  background-color: #c6e2ff;
}
</style>