<script setup lang="ts">
import {ref} from 'vue';

defineProps({
  content: String,
  title: String
});

const visible = ref(false);
const onToggle = () => {
  visible.value = !visible.value;
};
</script>

<template>
  <div class="gulu-popover">
    <div class="gulu-popover-content" v-if="visible">
      <div class="gulu-popover-title" v-if="title">{{ title }}</div>
      <template v-if="content">{{ content }}</template>
      <template v-else>
        <slot/>
      </template>
    </div>
    <div class="gulu-popover-action" @click="onToggle">
      <slot name="reference"/>
    </div>
  </div>
</template>

<style lang="scss">
.gulu-popover {
  display: inline-flex;
  position: relative;
  font-size: 14px;
  line-height: 1.4;
  padding: 12px;
  word-break: break-all;
  vertical-align: middle;

  &-content {
    position: absolute;
    bottom: 100%;
    left: 0;
    padding: 0.5em;
    background-color: #fff;
    color: inherit;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    box-shadow: 0 0 12px rgba(0, 0, 0, .12);

    .gulu-popover-title {
      font-size: 16px;
      line-height: 1;
      margin-bottom: 12px;
    }
  }

  &-action {

  }
}
</style>