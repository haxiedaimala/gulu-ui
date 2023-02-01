<script setup lang="ts">
import {inject, Ref} from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible')!;
const toggleAside = () => {
  asideVisible.value = !asideVisible.value;
};
</script>

<template>
  <div class="topnav">
    <div class="logo" @click="toggleAside">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;

    > li {
      margin: 0 1em;
    }
  }
}
</style>