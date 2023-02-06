<script setup lang="ts">
import Button from '../components/Button.vue';
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
const toggleCodeVisible = () => codeVisible.value = !codeVisible.value;
</script>

<template>
  <div class="switch">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="switch-component">
      <component :is="component"/>
    </div>
    <div class="switch-actions">
      <Button @click="toggleCodeVisible">查看代码</Button>
    </div>
    <div class="switch-code" v-if="codeVisible">
      <pre class="language-css" v-html="html"></pre>
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