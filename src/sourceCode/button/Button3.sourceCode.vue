<sourceCode>
支持 level
<detail>
  使用<code>level</code>来定义按钮的等级
  属性值可为：默认为<code>default</code><code>primary</code>、<code>Success</code>、
  <code>info</code>、<code>warning</code>、<code>danger</code>
</detail>
</sourceCode>

<script setup lang="ts">
import Button from '../../components/lib/Button.vue';
</script>

<template>
  <div>
    <Button>Default</Button>
    <Button level="primary">Primary</Button>
    <Button level="success">Success</Button>
    <Button level="info">Info</Button>
    <Button level="warning">Warning</Button>
    <Button level="danger">Danger</Button>
  </div>
  <div>
    <Button theme="link">Default链接</Button>
    <Button theme="link" level="primary">Primary链接</Button>
    <Button theme="link" level="success">Success链接</Button>
    <Button theme="link" level="info">Info链接</Button>
    <Button theme="link" level="warning">Warning链接</Button>
    <Button theme="link" level="danger">Danger链接</Button>
  </div>
  <div>
    <Button theme="text">Default文字</Button>
    <Button theme="text" level="primary">Primary文字</Button>
    <Button theme="text" level="success">Success文字</Button>
    <Button theme="text" level="info">Info文字</Button>
    <Button theme="text" level="warning">Warning文字</Button>
    <Button theme="text" level="danger">Danger文字</Button>
  </div>
</template>