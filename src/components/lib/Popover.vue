<script setup lang="ts">
defineProps({
  content: {
    type: String
  }
});
</script>

<template>
  <div class="gulu-popover">
    <div class="gulu-popover-content">
      <div v-if="content">{{ content }}</div>
      <template v-else>
        <slot/>
      </template>
    </div>
    <div class="gulu-popover-action">
      <slot name="reference"/>
    </div>
  </div>
</template>

<style lang="scss">
.gulu-popover {
  display:inline-flex;
  &-content {

  }

  &-action {

  }
}
</style>