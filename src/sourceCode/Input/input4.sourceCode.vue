<sourceCode>
密码框
<detail>
  使用 <code>show-password</code> 属性即可得到一个可切换显示隐藏的密码框
  该属性值为 <code>Boolean</code>类型
</detail>
</sourceCode>

<script setup lang="ts">
import Input from '../../components/lib/Input.vue';
import {ref} from 'vue';

const value = ref('');
</script>

<template>
  <Input v-model="value" type="password" show-password placeholder="请输入..."/>
</template>