<sourceCode>
支持信息提示
<detail>
  使用 <code>success</code> <code>error</code> 属性即可得到一个文本输入框的提示信息
</detail>
</sourceCode>

<script setup lang="ts">
import Input from '../../components/lib/Input.vue';
import {ref} from 'vue';

const value = ref('');
</script>

<template>
  <Input v-model="value" error="用户姓名不少于2个字" placeholder="请输入..."/>
  <br/>
  <br/>
  <Input v-model="value" success="符合规范" placeholder="请输入..."/>
</template>