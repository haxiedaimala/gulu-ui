<script setup lang="ts">
import Demo from '../../components/Demo.vue';
import InputSourceCode1 from '../../sourceCode/Input/input1.sourceCode.vue';
import InputSourceCode2 from '../../sourceCode/Input/input2.sourceCode.vue';
import InputSourceCode3 from '../../sourceCode/Input/input3.sourceCode.vue';
</script>

<template>
  <h1>Input 输入框</h1>
  <div class="gulu-doc-detail">通过鼠标或键盘输入字符</div>
  <Demo :component="InputSourceCode1"/>
  <Demo :component="InputSourceCode2"/>
  <Demo :component="InputSourceCode3"/>
</template>