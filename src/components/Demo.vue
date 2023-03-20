<script setup lang="ts">
import Button from './lib/Button.vue';
//@ts-ignore
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import {computed, ref} from 'vue';

const props = defineProps({
  component: {
    type: Object,
    required: true
  }
});
const html = computed(() => Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html'));
const codeVisible = ref(false);
const showCodeVisible = () => codeVisible.value = true;
const hideCodeVisible = () => codeVisible.value = false;
</script>

<template>
  <div class="switch-wrapper">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="detail" v-html="component.__sourceCodeDetail"></div>
    <div class="switch">
      <div class="switch-component">
        <component :is="component"/>
      </div>
      <div class="switch-actions">
        <Button @click="showCodeVisible" v-if="!codeVisible">查看代码</Button>
        <Button @click="hideCodeVisible" v-if="codeVisible">隐藏代码</Button>
      </div>
      <div class="switch-code" v-if="codeVisible">
        <pre class="language-css" v-html="html"></pre>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/helper";

$border-color: #d9d9d9;
.switch {
  border: 1px solid $border-color;

  &-wrapper {
    margin: 16px 0 32px;

    h2 {
      padding: 8px 0;
    }

    .detail {
      font-size: 16px;
      padding: 8px 0;
      line-height: 1.7;

      :deep(code) {
        @extend %code;
      }
    }
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