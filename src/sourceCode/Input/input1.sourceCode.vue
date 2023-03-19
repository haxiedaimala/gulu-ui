<sourceCode>
常规用法
<detail>
  使用 <code>v-model</code> 实现双向绑定 <code>value</code> 的输入值。
</detail>
</sourceCode>

<script setup lang="ts">
import Input from '../../components/lib/Input.vue';
import {ref} from 'vue';

const value = ref('');
</script>

<template>
  <Input v-model="value" placeholder="请输入..."/>
</template>