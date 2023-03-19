<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String
  }
});
defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();
</script>

<template>
  <input type="text"
         class="gulu-input"
         :value="modelValue"
         @input="$emit('update:modelValue',$event.target.value)"
         :placeholder="placeholder"
  />
</template>

<style lang="scss">
@import "../../assets/helper";

.gulu-input {
  height: 32px;
  width: 100%;
  padding: 5px 8px;
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

}
</style>
