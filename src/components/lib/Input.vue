<script setup lang="ts">
import {computed, ref, watchPostEffect} from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'text',
    validator(value: string): boolean {
      return ['text', 'password'].indexOf(value) >= 0;
    }
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  error: {
    type: String
  },
  success: {
    type: String
  }
});
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();
const clear = ref(props.clearable);
const inputWrapper = ref<HTMLInputElement>();
const inputType = ref(props.type);
const showPwd = ref(props.showPassword);
const name = computed(() => {
  return inputType.value === 'password' ? '-un-' : '-';
});
const clearValue = () => emits('update:modelValue', '');
const toggelType = () => {
  inputType.value = inputType.value === 'text' ? 'password' : 'text';
};
watchPostEffect(() => {
  if (!props.clearable && !props.showPassword) return;
  if (!inputWrapper.value) return;
  if (props.modelValue.length > 0) {
    inputWrapper.value.onmouseenter = () => {
      clear.value = true;
      showPwd.value = true;
    };
    inputWrapper.value.onmouseleave = () => {
      clear.value = false;
      showPwd.value = false;
    };
  }
});
const messageTips = computed(() => {
  if (props.error) return {type: 'error', value: props.error};
  if (props.success) return {type: 'success', value: props.success};
  return false;
});
const onInput = (e: Event) => {
  emits('update:modelValue', (e.target! as HTMLInputElement).value);
};
</script>

<template>
  <div class="gulu-input-wrapper" ref="inputWrapper">
    <input :type="inputType"
           class="gulu-input"
           :class="{['gulu-input-error']:error}"
           :value="modelValue"
           :disabled="disabled"
           @input="onInput"
           :placeholder="placeholder"
    />
    <span class="gulu-input-clear"
          v-if="type==='text'&&clearable && clear && modelValue.length>0"
          @click="clearValue"
    />
    <span v-if="type==='password'&&showPassword && showPwd && modelValue.length>0"
          @click="toggelType"
          class="gulu-input-show-pwd">
      <i class="gulu-iconfont" :class="`g${name}show-pwd`"/>
    </span>
    <template v-if="messageTips && messageTips.type">
      <i class="gulu-iconfont gulu-input-icon" :class="`g-${messageTips.type}`"/>
      <span :class="`gulu-input-${messageTips.type}-message`">{{ messageTips.value }}</span>
    </template>
  </div>
</template>

<style lang="scss">
@import "../../assets/helper";
@import "iconfont";

.gulu-input-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;

  .gulu-input {
    height: 32px;
    width: 100%;
    padding: 5px 3em 5px 8px;
    font-size: inherit;
    border-radius: 4px;
    border: 1px solid $color-border;

    &:hover {
      border-color: darken($color-border, 20%);
    }

    &:focus {
      border-color: $color-button-normal;
      outline: none;
    }

    &[disabled] {
      color: darken($color-border, 20%);
      background: $color-input-disabled;
      cursor: not-allowed;

      &:hover {
        border-color: $color-border;
      }
    }

    &.gulu-input-error {
      border-color: $color-button-danger;
    }
  }

  .gulu-input-clear {
    position: absolute;
    right: 8px;
    width: 0.9em;
    height: 0.9em;
    border: 1px solid $color-border;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    cursor: pointer;

    &::after, &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      width: 0.8px;
      height: 0.4em;
      background-color: $color-border;
    }

    &::after {
      transform: translate(-50%, -50%) rotate(135deg);
    }
  }

  .gulu-input-show-pwd {
    display: flex;
    justify-self: center;
    align-items: center;
    position: absolute;
    right: 8px;
    width: 1em;
    height: 1em;
    cursor: pointer;
  }

  .gulu-input-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 1.5em;
    height: 1em;
    margin: 0 0.3em 0 0.5em;
  }

  .gulu-input-error-message,
  .gulu-input-success-message {
    white-space: nowrap;
    font-size: 12px;
    color: $color-button-danger;
  }

  .gulu-input-success-message {
    color: $color-button-success;
  }
}
</style>
