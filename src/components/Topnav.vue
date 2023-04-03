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
        <use xlink:href="#icon-logo"/>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
      <li><a href="https://www.npmjs.com/package/gulu-ui-myself">npm</a></li>
    </ul>
    <div v-if="toggleAsideVisible" class="toggleAside">
      <transition name="fade" mode="out-in" @click="toggleAside" class="icon">
        <svg v-if="asideVisible">
          <use xlink:href="#icon-close"/>
        </svg>
        <svg v-else>
          <use xlink:href="#icon-menu"/>
        </svg>
      </transition>
    </div>
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

    > svg {
      width: 100%;
      height: 100%;
    }
  }

  @media(max-width: $width) {
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

.fade-enter-active,
.fade-leave-active {
  transition: all 250ms linear;
}

.fade-enter-from,
.fade-leave-to {
  transform: rotateX(-90deg);
}
</style>