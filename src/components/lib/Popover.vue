<script setup lang="ts">
import {nextTick, ref} from 'vue';

defineProps({
  content: String,
  title: String
});

const visible = ref(false);
const popover = ref<HTMLDivElement>();
const trigger = ref<HTMLDivElement>();
const onClickDocument = (e: Event) => {
  if (popover.value?.contains(e.target as HTMLElement)) return;
  if (trigger.value?.contains(e.target as HTMLElement)) return;
  close();
};
const positionContent = () => {
  const {top, left} = trigger.value!.getBoundingClientRect();
  popover.value!.style.left = left + window.scrollX + 'px';
  popover.value!.style.top = top + window.scrollY + 'px';
};
const open = () => {
  visible.value = true;
  nextTick(() => {
    positionContent();
    document.addEventListener('click', onClickDocument);
  });
};
const close = () => {
  visible.value = false;
  document.removeEventListener('click', onClickDocument);
};
const onToggle = () => {
  visible.value ? close() : open();
};
</script>

<template>
  <div class="gulu-popover">
    <Teleport to="body">
      <div class="gulu-popover-content" v-if="visible" ref="popover">
        <div class="gulu-popover-title" v-if="title">{{ title }}</div>
        <template v-if="content">{{ content }}</template>
        <template v-else>
          <slot/>
        </template>
      </div>
    </Teleport>
    <div class="gulu-popover-action" @click="onToggle" ref="trigger">
      <slot name="reference"/>
    </div>
  </div>
</template>

<style lang="scss">
.gulu-popover {
  display: inline-flex;
  position: relative;
  vertical-align: middle;

  &-content {
    position: absolute;
    background-color: #fff;
    color: inherit;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .15));
    //box-shadow: 0 0 12px rgba(0, 0, 0, .12);
    transform: translate(0, calc(-100% - 1em));
    word-break: break-all;
    font-size: 14px;
    line-height: 1.4;
    padding: 1em;

    &::after,
    &::before {
      content: '';
      width: 0;
      height: 0;
      border: 0.8em solid transparent;
      border-top-color: #e4e7ed;
      position: absolute;
      top: 100%;
      left: 1em;
    }

    &::after {
      border-top-color: #fff;
      top: calc(100% - 1px);
    }

    .gulu-popover-title {
      font-size: 16px;
      line-height: 1;
      margin-bottom: 0.8em;
    }
  }

  &-action {

  }
}
</style>