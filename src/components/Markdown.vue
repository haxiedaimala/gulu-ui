<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true
  }
});

</script>

<template>
  <article class="markdown-body">
    <component :is="content" class="article"/>
  </article>
</template>

<style lang="scss" scoped>
@import "../assets/helper";

:deep(.article) {
  a {
    color: $color-theme;
  }

  pre {
    code {
      color: $color-text;
    }
  }
}
</style>