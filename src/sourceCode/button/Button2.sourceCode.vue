<sourceCode>
支持 size
<detail>
  <p>除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。</p>
  <p>使用 <code>size</code> 属性额外配置尺寸，可使用<code>big</code>和<code>big</code>两种值。</p>
</detail>
</sourceCode>

<script setup lang="ts">
import Button from '../../components/lib/Button.vue';
</script>

<template>
  <div>
    <Button size="big">大大</Button>
    <Button>普通</Button>
    <Button size="small">小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大</Button>
    <Button theme="link">普通</Button>
    <Button theme="link" size="small">小小</Button>
  </div>
  <div>
    <Button theme="text" size="big">大大</Button>
    <Button theme="text">普通</Button>
    <Button theme="text" size="small">小小</Button>
  </div>
</template>
