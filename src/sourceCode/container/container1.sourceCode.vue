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
    <g-header class="bg"/>
    <g-main class="bg1"/>
    <g-footer class="bg2"/>
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
  background-color: #c6e2ff;
}
</style>