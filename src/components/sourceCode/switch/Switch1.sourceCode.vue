<sourceCode>常规用法</sourceCode>

<script setup lang="ts">
import Switch from '../../Switch.vue';
import {ref} from 'vue';

const checked = ref(false);
</script>

<template>
  <Switch v-model:value="checked"/>
</template>