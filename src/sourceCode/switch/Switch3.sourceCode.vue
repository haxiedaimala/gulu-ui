<sourceCode>
支持 size
<detail>使用<code>size</code>属性来表示不同的尺寸大小，可以选择的属性值分别为
  大尺寸<code>large</code>，正常尺寸（默认）<code>normal</code>,小尺寸<code>small</code>
</detail>
</sourceCode>

<script setup lang="ts">
import Switch from '../../components/lib/Switch.vue';
import {ref} from 'vue';

const checked = ref(true);
</script>

<template>
  <Switch v-model="checked" size="large"/>
  <Switch v-model="checked"/>
  <Switch v-model="checked" size="small"/>
</template>
