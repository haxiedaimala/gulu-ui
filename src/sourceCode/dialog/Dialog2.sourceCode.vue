<sourceCode>
一键打开 Dialog
<detail>使用 <code>openDialog</code>模块，引入 <code>Dialog</code>组件</detail>
</sourceCode>

<script setup lang="ts">
import Button from '../../components/Button.vue';
import {openDialog} from '../../components/openDialog';
import {h} from 'vue';

const showDialog = () => {
  openDialog({
    title: h('strong', {}, '标题'),
    content: 'content',
    clickCloseOverlay: false,
    hasButton: true,
    ok() {
      alert('ok');
    },
    cancle() {
      alert('cancle');
    }
  });
};
</script>

<template>
  <Button @click="showDialog">一句话展示Dialog</Button>
</template>