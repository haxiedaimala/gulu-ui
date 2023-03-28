<script setup lang="ts">
import {computed} from 'vue';

const {theme = 'button', size = 'normal', level = 'default', disabled, loading} = defineProps<{
  theme?: 'link' | 'text' | 'button',
  size?: 'big' | 'small' | 'normal',
  level?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger',
  disabled?: boolean,
  loading?: boolean,
}>();
const classes = computed(() => {
  return {
    [`gulu-theme-${theme}`]: theme,
    [`gulu-size-${size}`]: size,
    [`gulu-level-${level}`]: level,
  };
});
</script>


<template>
  <button class="gulu-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="gulu-loadingIndicator"></span>
    <slot/>
  </button>
</template>

<style lang="scss">
@import "./gulu";
@import "../../assets/helper";

$radius: 4px;
$red: red;
$grey: grey;
.gulu-button {
  box-sizing: border-box;
  height: $height-button;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color-font;
  border: 1px solid $color-border;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 250ms;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $color-button-normal;
    border-color: $color-button-normal;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.gulu-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $color-button-normal;

    &:hover,
    &:focus {
      color: lighten($color-button-normal, 10%);
    }
  }

  &.gulu-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.gulu-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.gulu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.gulu-theme-button {
    &.gulu-level-primary {
      background: $color-button-normal;
      color: #fff;
      border-color: $color-button-normal;

      &:hover,
      &:focus {
        background: darken($color-button-normal, 10%);
        border-color: darken($color-button-normal, 10%);
      }
    }

    &.gulu-level-success {
      background: $color-button-success;
      color: #fff;
      border-color: $color-button-success;

      &:hover,
      &:focus {
        background: darken($color-button-success, 10%);
        border-color: darken($color-button-success, 10%);
      }
    }

    &.gulu-level-info {
      background: $color-button-info;
      color: #fff;
      border-color: $color-button-info;

      &:hover,
      &:focus {
        background: darken($color-button-info, 10%);
        border-color: darken($color-button-info, 10%);
      }
    }

    &.gulu-level-warning {
      background: $color-button-warning;
      color: #fff;
      border-color: $color-button-warning;

      &:hover,
      &:focus {
        background: darken($color-button-warning, 10%);
        border-color: darken($color-button-warning, 10%);
      }
    }

    &.gulu-level-danger {
      background: $color-button-danger;
      border-color: $color-button-danger;
      color: #fff;

      &:hover,
      &:focus {
        background: darken($color-button-danger, 10%);
        border-color: darken($color-button-danger, 10%);
      }
    }
  }

  &.gulu-theme-link, &.gulu-theme-text {
    &.gulu-level-default {
      color: $color-font;

      &:hover,
      &:focus {
        color: darken($color-font, 10%);
      }
    }

    &.gulu-level-primary {
      color: $color-button-normal;

      &:hover,
      &:focus {
        color: darken($color-button-normal, 10%);
      }
    }

    &.gulu-level-success {
      color: $color-button-success;

      &:hover,
      &:focus {
        color: darken($color-button-success, 10%);
      }
    }

    &.gulu-level-info {
      color: $color-button-info;

      &:hover,
      &:focus {
        color: darken($color-button-info, 10%);
      }
    }

    &.gulu-level-warning {
      color: $color-button-warning;

      &:hover,
      &:focus {
        color: darken($color-button-warning, 10%);
      }
    }

    &.gulu-level-danger {
      color: $color-button-danger;

      &:hover,
      &:focus {
        color: darken($color-button-danger, 10%);
      }
    }

  }


  &.gulu-theme-button,
  &.gulu-theme-link,
  &.gulu-theme-text {
    &[disabled] {
      color: $grey;
      cursor: not-allowed;
    }
  }

  &.gulu-theme-button[disabled]:hover {
    border-color: $grey;
  }

  > .gulu-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-width: 2px;
    border-style: solid;
    border-color: $color-button-normal $color-button-normal $color-button-normal transparent;
    animation: gulu-spin 1s infinite linear;
  }
}

@keyframes gulu-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>