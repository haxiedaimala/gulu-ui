<sourceCode>
支持 disabled
<detail>
  通过 <code>disabled</code> 属性指定是否禁用 <code>input</code> 组件。
  该属性值为 <code>Boolean</code>类型
</detail>
</sourceCode>

<script setup lang="ts">
import Input from '../../components/lib/Input.vue';
import {ref} from 'vue';

const value = ref('');
</script>

<template>
  <Input v-model="value" disabled placeholder="请输入..."/>
</template>