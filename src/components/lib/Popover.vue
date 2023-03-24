<script setup lang="ts">
import {computed, nextTick, onMounted, onUnmounted, ref} from 'vue';

const props = defineProps({
  content: String,
  title: String,
  width: Number,
  position: {
    type: String,
    default: 'top',
    validator: (value: string) => ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
  },
  trigger: {
    type: String,
    default: 'hover',
    validator: (value: string) => ['hover', 'click', 'focus'].indexOf(value) >= 0
  }
});

const visible = ref(false);
const popover = ref<HTMLDivElement>();
const triggerItem = ref<HTMLDivElement>();
const onClickDocument = (e: Event) => {
  if (popover.value?.contains(e.target as HTMLElement)) return;
  if (triggerItem.value?.contains(e.target as HTMLElement)) return;
  close();
};
const positionContent = () => {
  const {top, left, width, height} = triggerItem.value!.getBoundingClientRect();
  const {height: height2} = popover.value!.getBoundingClientRect();
  const xxx = {
    top: {
      left: left + window.scrollX,
      top: top + window.scrollY
    },
    bottom: {
      left: left + window.scrollX,
      top: top + height + window.scrollY
    },
    left: {
      left: left + window.scrollX,
      top: top + (height - height2) / 2 + window.scrollY
    },
    right: {
      left: left + width + window.scrollX,
      top: top + (height - height2) / 2 + window.scrollY
    }
  };
  const position = props.position as 'top' | 'bottom' | 'left' | 'right';
  popover.value!.style.left = xxx[position].left + 'px';
  popover.value!.style.top = xxx[position].top + 'px';
  if (!props.width) return;
  popover.value!.style.width = props.width + 'px';
};
const open = () => {
  visible.value = true;
  nextTick(() => {
    positionContent();
    if (props.trigger !== 'click') return;
    document.addEventListener('click', onClickDocument);
  });
};
const close = () => {
  visible.value = false;
  if (props.trigger !== 'click') return;
  document.removeEventListener('click', onClickDocument);
};
const xxx = (e: Event) => {
  if (!triggerItem.value?.contains(e.target as HTMLElement) && !popover.value?.contains(e.target as HTMLElement)) {
    close();
    return;
  }
  if (triggerItem.value?.contains(e.target as HTMLElement) || popover.value?.contains(e.target as HTMLElement)) {
    open();
  }
};
const onToggle = () => {
  visible.value ? close() : open();
};
const classStyle = computed(() => {
  return {
    [`gulu-popover-${props.position}`]: props.position
  };
});
onMounted(() => {
  if (props.trigger === 'click') {
    triggerItem.value?.addEventListener('click', onToggle);
  } else if (props.trigger === 'hover') {
    document.addEventListener('mousemove', xxx);
  } else if (props.trigger === 'focus') {
    triggerItem.value?.addEventListener('focus', open, true);
    triggerItem.value?.addEventListener('blur', close, true);
  }
});
onUnmounted(() => {
  if (props.trigger === 'click') {
    triggerItem.value?.removeEventListener('click', onToggle);
  } else if (props.trigger === 'hover') {
    document.removeEventListener('mousemove', xxx);
  } else if (props.trigger === 'focus') {
    triggerItem.value?.removeEventListener('focus', open, true);
    triggerItem.value?.removeEventListener('blur', close, true);
  }
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
    <div class="gulu-popover-action" ref="triggerItem">
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