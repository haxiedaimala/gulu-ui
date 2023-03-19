<script setup lang="ts">
import {ref, watchPostEffect} from 'vue';

const props = defineProps({
      modelValue: Boolean,
      disabled: {
        type: Boolean,
        default: false
      },
      style: {
        type: Object
      },
      size: {
        type: String,
        default: 'normal',
        validator: (value: string) => ['large', 'normal', 'small'].indexOf(value) >= 0
      }
    })
;
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();
const toggleChecked = () => {
  if (props.disabled) return;
  emit('update:modelValue', !props.modelValue);
};
const buttonItem = ref<HTMLButtonElement>();
watchPostEffect(() => {
  if (props.style) {
    buttonItem.value!.style.backgroundColor = props.modelValue ? props.style['--switch-on-color'] : props.style['--switch-off-color'];
  }
});
</script>

<template>
  <button ref="buttonItem" class="gulu-switch"
          :class="{'gulu-checked':modelValue,disabled:disabled,[`gulu-${size}-switch`]:size}"
          @click="toggleChecked">
    <span></span>
  </button>
</template>

<style lang="scss">
@import "../../assets/helper";

.gulu-switch {
  width: $height-normal-switch*2;
  height: $height-normal-switch;
  border: none;
  border-radius: calc(#{$height-normal-switch} / 2);
  background: $color-off-switch;
  position: relative;

  &.gulu-large-switch {
    width: $height-large-switch*2;
    height: $height-large-switch;
    border-radius: calc(#{$height-large-switch} / 2);

    > span {
      width: $height-large-switch-span;
      height: $height-large-switch-span;
      border-radius: calc(#{$height-large-switch} / 2);
    }

    &.gulu-checked {
      > span {
        left: calc(100% - #{$height-large-switch-span} - 2px);
      }
    }

    &:active {
      > span {
        width: $height-large-switch-span+4px;
      }
    }
    &.gulu-checked:active {
      > span {
        width: $height-large-switch-span+4px;
      }
    }
  }
  &.gulu-small-switch {
    width: $height-small-switch*2;
    height: $height-small-switch;
    border-radius: calc(#{$height-small-switch} / 2);

    > span {
      width: $height-small-switch-span;
      height: $height-small-switch-span;
      border-radius: calc(#{$height-small-switch} / 2);
    }

    &.gulu-checked {
      > span {
        left: calc(100% - #{$height-small-switch-span} - 2px);
      }
    }

    &:active {
      > span {
        width: $height-small-switch-span+4px;
      }
    }
    &.gulu-checked:active {
      > span {
        width: $height-small-switch-span+4px;
      }
    }
  }

  & + & {
    margin-left: 8px;
  }

  &.disabled {
    cursor: not-allowed;
  }

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $height-normal-switch-span;
    height: $height-normal-switch-span;
    background: #fff;
    border-radius: calc(#{$height-normal-switch} / 2);
    transition: all 250ms;
  }

  &.gulu-checked {
    background: $color-on-switch;

    > span {
      left: calc(100% - #{$height-normal-switch-span} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $height-normal-switch-span+4px;
    }
  }

  &.gulu-checked:active {
    > span {
      width: $height-normal-switch-span+4px;
      margin-left: -4px;
    }
  }
}
</style>