<sourceCode>
支持 disabled
<detail>设置<code>disabled</code>属性，接受一个<code>Boolean</code>，设置<code>true</code>即可禁用。</detail>
</sourceCode>

<script setup lang="ts">
import Switch from '../../components/Switch.vue';
import {ref} from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
</script>

<template>
  <Switch v-model="checked1"/>
  <Switch v-model="checked2" disabled/>
</template>
