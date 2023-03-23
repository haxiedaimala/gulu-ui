<script setup lang="ts">
import {computed, nextTick, ref} from 'vue';

const props = defineProps({
  content: String,
  title: String,
  width: Number,
  position: {
    type: String,
    default: 'top',
    validator: (value: string) => ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
  }
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
  const {top, left, width, height} = trigger.value!.getBoundingClientRect();
  if (props.position === 'top') {
    popover.value!.style.left = left + window.scrollX + 'px';
    popover.value!.style.top = top + window.scrollY + 'px';
  } else if (props.position === 'bottom') {
    popover.value!.style.left = left + window.scrollX + 'px';
    popover.value!.style.top = top + height + window.scrollY + 'px';
  } else if (props.position === 'left') {
    const {height: height2} = popover.value!.getBoundingClientRect();
    popover.value!.style.left = left + window.scrollX + 'px';
    popover.value!.style.top = top + (height - height2) / 2 + window.scrollY + 'px';
  } else if (props.position === 'right') {
    const {height: height2} = popover.value!.getBoundingClientRect();
    popover.value!.style.left = left + width + window.scrollX + 'px';
    popover.value!.style.top = top + (height - height2) / 2 + window.scrollY + 'px';
  }

  if (!props.width) return;
  popover.value!.style.width = props.width + 'px';
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
const classStyle = computed(() => {
  return {
    [`gulu-popover-${props.position}`]: props.position
  };
});
</script>

<template>
  <div class="gulu-popover">
    <Teleport to="body">
      <div class="gulu-popover-content" :class="classStyle" v-if="visible" ref="popover">
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
      position: absolute;
    }

    &.gulu-popover-top {
      transform: translate(0, calc(-100% - 1em));

      &::after,
      &::before {
        border-top-color: #e4e7ed;
        top: 100%;
        left: 1em;
      }

      &::after {
        border-top-color: #fff;
        top: calc(100% - 1px);
      }
    }

    &.gulu-popover-bottom {
      transform: translate(0, 1em);

      &::after,
      &::before {
        border-bottom-color: #e4e7ed;
        bottom: 100%;
        left: 1em;
      }

      &::after {
        border-bottom-color: #fff;
        bottom: calc(100% - 1px);
      }
    }

    &.gulu-popover-left {
      transform: translate(calc(-100% - 1em), 0);

      &::after,
      &::before {
        transform: translate(0, -50%);
        border-left-color: #e4e7ed;
        top: 50%;
        left: 100%;
      }

      &::after {
        border-left-color: #fff;
        left: calc(100% - 1px);
      }
    }

    &.gulu-popover-right {
      transform: translate(1em, 0);

      &::after,
      &::before {
        transform: translate(0, -50%);
        border-right-color: #e4e7ed;
        top: 50%;
        right: 100%;
      }

      &::after {
        border-right-color: #fff;
        right: calc(100% - 1px);
      }
    }

    .gulu-popover-title {
      font-size: 16px;
      line-height: 1;
      margin-bottom: 0.8em;
    }
  }

  &-action {
    margin: 8px;
  }
}
</style>