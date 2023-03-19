<script setup lang="ts">
import Button from './Button.vue';

const props = defineProps<{
  modelValue?: boolean,
  clickCloseOverlay?: boolean,
  ok?: () => boolean | void,
  cancle?: () => boolean | void,
  hasButton: boolean
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();
const closeDialog = () => {
  emit('update:modelValue', !props.modelValue);
};
const onClickOverlay = () => {
  if (props.clickCloseOverlay) {
    closeDialog();
  }
};
const onClickOk = () => {
  if (!props.ok) closeDialog();
  if (props.ok && props.ok() !== false) {
    closeDialog();
  }
};
const onClickCancle = () => {
  props.cancle ? props.cancle() : '';
  closeDialog();
};
</script>

<template>
  <template v-if="modelValue">
    <Teleport to="body">
      <div class="gulu-dialog-overlay" @click="onClickOverlay"></div>
      <div class="gulu-dialog-wrapper">
        <div class="gulu-dialog">
          <header>
            <slot name="header"/>
            <span @click="closeDialog" class="gulu-dialog-close"></span>
          </header>
          <main>
            <slot/>
          </main>
          <footer v-if="hasButton">
            <Button @click="onClickCancle">Cancle</Button>
            <Button level="primary" @click="onClickOk">Ok</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
  background: #fff;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: fade-out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    position: relative;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px 24px;
  }

  > footer {
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::after,
    &::before {
      content: "";
      height: 1px;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      background: black;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>