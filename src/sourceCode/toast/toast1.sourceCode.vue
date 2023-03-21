<sourceCode>常见页面布局</sourceCode>

<script setup lang="ts">
import Button from '../../components/lib/Button.vue';
import {openToast} from '../../components/lib/openToast';

const showToast = () => {
  openToast({
    message: 'hello'
  });
};
</script>

<template>
  <Button @click="showToast">show Toast</Button>
</template>