<script setup lang="ts">
import Topnav from '../components/Topnav.vue';
</script>

<template>
  <div>
    <div class="gulu-wrapper">
      <Topnav/>
      <div class="banner">
        <h1>轱辘UI</h1>
        <h2>一个厉害的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com">Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-ts"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-light"></use>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
$color-green: #02bcb0;
$border-radius: 4px;
$color: #007974;
.gulu-wrapper {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  border-bottom-left-radius: 40% 50%;
  border-bottom-right-radius: 40% 50%;

  > .banner {
    color: $color;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: $color-green;
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
  > svg {
    width: 64px;
    height: 64px;
  }
}
</style>