<script setup lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, onMounted, ref, Ref} from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible')!;
const showTopBtn = ref(false);
const toggleTopBtn = () => {
  const dis = document.documentElement.scrollTop || document.body.scrollTop;
  showTopBtn.value = dis >= 350;
};
const backTop = () => {
  let timer = setInterval(() => {
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    let speed = Math.floor(-top / 5);
    document.documentElement.scrollTop = document.body.scrollTop = top + speed;
    if (top === 0) clearInterval(timer);
  }, 20);
};
onMounted(() => {
  window.addEventListener('scroll', toggleTopBtn, true);
});
</script>

<template>
  <div class="layout">
    <Topnav toggleAsideVisible class="nav"/>
    <div class="content">
      <aside :class="{open:asideVisible}">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/Dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/layout">Layout 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/container">Container 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/toast">Toast 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/popover">Popover 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/collapse">Collapse 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
        <div v-show="showTopBtn" @click="backTop" class="back-top">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-back-top"></use>
          </svg>
        </div>
      </main>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/helper";

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 300px;
    @media (max-width: $width) {
      padding-left: 0;
    }
    display: flex;

    > aside {
      flex-shrink: 0;
      position: fixed;
      top: 0;
      left: 0;
      padding: 80px 0 2em;
      height: 100%;
      width: 285px;
      z-index: $index-aside;
      box-shadow: $box-shadow-aside;
      background: #fff;
      overflow: auto;
      transform: translate(-100%, 0);
      opacity: 0;
      transition: all 250ms;

      &::-webkit-scrollbar {
        display: none
      }

      > h2 {
        margin: 16px 4px;
        padding: 0 40px;
      }

      > ol {
        > li {
          a {
            line-height: 40px;
            padding: 0 48px;
            display: block;
            color: $color-text;

            &:hover {
              color: $color-theme;
            }
          }

          .router-link-active {
            background-color: $color-tab-bg;
            position: relative;
            color: $color-theme;

            &::after {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              height: 100%;
              width: 3px;
              background-color: $color-theme;
              animation: 0.8s slide;
            }
          }
        }
      }

      &.open {
        opacity: 1;
        transform: translate(0);
      }


      @media (min-width: $width) {
        opacity: 1;
        transform: translate(0);
      }
    }

    > main {
      flex-grow: 1;
      padding: 56px;
      background: #fff;
      overflow: auto;

      .back-top {
        position: fixed;
        right: 6%;
        bottom: 11%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.5em;
        height: 2.5em;
        color: $color-theme;
        background-color: #fff;
        box-shadow: $box-shadow-back-top;
        border-radius: 50%;
        cursor: pointer;
        z-index: 5;

        svg {
          width: 2em;
          height: 2em;
        }

        &:hover {
          background-color: $color-hover-back-top;
        }
      }
    }
  }
}

@keyframes slide {
  0% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg)
  }
}
</style>