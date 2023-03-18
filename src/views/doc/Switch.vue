<script setup lang="ts">
import SwitchSourceCode1 from '../../sourceCode/switch/Switch1.sourceCode.vue';
import SwitchSourceCode2 from '../../sourceCode/switch/Switch2.sourceCode.vue';
import SwitchSourceCode3 from '../../sourceCode/switch/Switch3.sourceCode.vue';
import Demo from '../../components/Demo.vue';
</script>


<template>
  <h1>Switch 组件示例</h1>
  <div class="detail">表示两种相互对立的状态间的切换，多用于触发「开/关」。</div>
  <Demo :component="SwitchSourceCode1"/>
  <Demo :component="SwitchSourceCode2"/>
  <Demo :component="SwitchSourceCode3"/>
</template>

<style lang="scss" scoped>
.detail {
  padding: 1em 0;
}
</style>
