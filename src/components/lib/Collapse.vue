<script setup lang="ts">
import CollapseItem from './CollapseItem.vue';
import {ref, useSlots, watch} from 'vue';

interface Props {
  modelValue: string[],
  accordion?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  accordion: false
});
const emits = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>();

if (!useSlots().default) throw new Error('Collapse 组件内容不为空');
const slots = useSlots().default!();
slots.forEach(node => {
  if (node.type !== CollapseItem) throw new Error('Collapse 组件的子组件名必须是 CollapseItem');
});

const activesName = ref(props.modelValue);
watch(activesName, () => {
  emits('update:modelValue', activesName.value);
});
</script>

<template>
  <div class="gulu-collapse">
    <template v-for="(component,index) in slots" :key="index">
      <component :is="component" v-model="activesName" :accordion="props.accordion"/>
    </template>
  </div>
</template>

<style lang="scss">
@import "../../assets/helper";

.gulu-collapse {
  border: 1px solid $color-border;
  border-radius: 4px;
}
</style>