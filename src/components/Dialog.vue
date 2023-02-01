<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
  <div class="gulu-dialog-overlay"></div>
  <div class="gulu-dailog-wrapper">
    <header>标题</header>
    <main>
      <p>内容1</p>
      <p>内容2</p>
    </main>
    <footer>
      <Button>Ok</Button>
      <Button>Cancle</Button>
    </footer>
  </div>
</template>

<style lang="scss">

</style>