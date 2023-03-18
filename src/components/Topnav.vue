<script setup lang="ts">
import {inject, Ref} from 'vue';

defineProps({
  toggleAsideVisible: {
    type: Boolean,
    default: false
  }
});
const asideVisible = inject<Ref<boolean>>('asideVisible')!;
const toggleAside = () => {
  asideVisible.value = !asideVisible.value;
};
</script>

<template>
  <div class="top-nav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <svg v-if="toggleAsideVisible" class="icon toggleAside" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/helper";

.top-nav {
  background-color: #fff;
  box-shadow: $box-shadow-nav;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 2em;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: $index-top-nav;

  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    color: $color-text;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media(max-width: 500px) {
    > .menu {
      display: none
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>