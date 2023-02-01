<script setup lang="ts">
import Switch from '../components/Switch.vue';
import {ref} from 'vue';

const y = ref(true);
</script>

<template>
  <Switch :value="y" @input="y=$event"/>
</template>

<style lang="scss" scoped>
</style>