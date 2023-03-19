<script setup lang="ts">
import Topnav from '../components/Topnav.vue';
</script>

<template>
  <div>
    <div class="gulu-wrapper">
      <Topnav/>
      <div class="banner">
        <h1>轱辘UI</h1>
        <h2>一个面向学习者的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com">Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/helper";

$border-radius: 4px;
.gulu-wrapper {
  background: linear-gradient(139deg, rgba(248, 152, 152, 1) 11%, rgba(231, 139, 161, 1) 27%, rgba(245, 108, 108, 1) 53%, rgba(245, 108, 108, 1) 71%, rgba(198, 112, 133, 1) 94%);
  clip-path: ellipse(80% 60% at 50% 40%);

  :deep(.top-nav) {
    box-shadow: none;
    background-color: transparent;
  }

  > .banner {
    color: $color-text;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: $color-tab-slide;
        color: #fff;
        display: inline-block;
        border-radius: $border-radius;
        padding: 8px 24px;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}

.features {
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        flex: 1;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas: "icon title" "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      color: $color-text;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}
</style>