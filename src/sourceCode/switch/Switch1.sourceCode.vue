<sourceCode>
常规用法
<detail>
  绑定 <code>v-model</code> 到一个 <code>Boolean</code> 类型的变量。 可以使用 <code>--switch-on-color</code> 属性与 <code>--switch-off-color</code>
  属性来设置开关的背景色。
</detail>
</sourceCode>

<script setup lang="ts">
import Switch from '../../components/lib/Switch.vue';
import {ref} from 'vue';

const checked1 = ref(true);
const checked2 = ref(true);
</script>

<template>
  <Switch v-model="checked1"/>
  <Switch v-model="checked2" style="--switch-on-color: #13ce66; --switch-off-color: #ff4949"/>
</template>