<sourceCode>
一键清空
<detail>
  使用 <code>clearable</code> 属性即可得到一个可一键清空的输入框
  该属性值为 <code>Boolean</code>类型
</detail>
</sourceCode>

<script setup lang="ts">
import Input from '../../components/lib/Input.vue';
import {ref} from 'vue';

const value = ref('');
</script>

<template>
  <Input v-model="value" clearable placeholder="请输入..."/>
</template>