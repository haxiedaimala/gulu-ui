<sourceCode>一键打开 Dialog</sourceCode>

<script setup lang="ts">
import Button from '../../components/Button.vue';
import {openDialog} from '../../components/openDialog';
import {h} from 'vue';

const showDialog = () => {
  openDialog({
    title: h('strong', {}, '标题'),
    content: 'content',
    clickCloseOverlay: false,
    ok() {
      console.log('ok');
    },
    cancle() {
      console.log('cancle');
    }
  });
};
</script>

<template>
  <Button @click="showDialog">一句话展示Dialog</Button>
</template>