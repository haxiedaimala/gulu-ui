<script setup lang="ts">
import {ref, watchPostEffect} from 'vue';

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
  }
});
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();
const clear = ref(props.clearable);
const clearValue = () => emits('update:modelValue', '');
const inputWrapper = ref<HTMLInputElement>();
watchPostEffect(() => {
  if (!props.clearable) return;
  if (!inputWrapper.value) return;
  if (props.modelValue.length > 0) {
    inputWrapper.value.onmouseenter = () => clear.value = true;
    inputWrapper.value.onmouseleave = () => clear.value = false;
  }
});
</script>

<template>
  <div class="gulu-input-wrapper" ref="inputWrapper">
    <input type="text"
           class="gulu-input"
           :value="modelValue"
           :disabled="disabled"
           @input="$emit('update:modelValue',$event.target.value)"
           :placeholder="placeholder"
    />
    <span class="gulu-input-clear"
          v-if="clear && modelValue.length>0"
          @click="clearValue"
    />
  </div>
</template>

<style lang="scss">
@import "../../assets/helper";

.gulu-input-wrapper {
  position: relative;
  display: flex;
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
      background-color: #d9d9d9;
    }

    &::after {
      transform: translate(-50%, -50%) rotate(135deg);
    }
  }
}


</style>
