<script setup lang="ts">
import Switch from '../components/Switch.vue';
import Button from '../components/Button.vue';
import {ref} from 'vue';

const checked = ref(false);
const checked2 = ref(false);
</script>

<template>
  <h1>Switch 组件示例</h1>
  <div class="switch">
    <h2>常规用法</h2>
    <div class="switch-component">
      <Switch v-model:value="checked"/>
    </div>
    <div class="switch-actions">
      <Button>查看代码</Button>
    </div>
    <div class="switch-code">
      <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
    </div>
  </div>
  <div class="switch">
    <h2>支持 disabled</h2>
    <div class="switch-component">
      <Switch v-model:value="checked2" disabled/>
    </div>
    <div class="switch-actions">
      <Button>查看代码</Button>
    </div>
    <div class="switch-code">
      <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.switch {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  > &-component {
    padding: 16px;
  }

  > &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  > &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>