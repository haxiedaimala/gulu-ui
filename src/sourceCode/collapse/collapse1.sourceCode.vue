<sourceCode>
常规用法
<detail>可同时展开多个面板，面板之间不影响</detail>
</sourceCode>

<script setup lang="ts">
import Collapse from '../../components/lib/Collapse.vue';
import CollapseItem from '../../components/lib/CollapseItem.vue';
import {ref} from 'vue';

const activeNames = ref(['1']);
</script>

<template>
  <Collapse v-model="activeNames">
    <CollapseItem title="Consistency" name="1">
      <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and
        habits that the users are used to;
      </div>
      <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts,
        position of elements, etc.
      </div>
    </CollapseItem>
    <CollapseItem title="Feedback" name="2">
      <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive
        effects;
      </div>
      <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
    </CollapseItem>
    <CollapseItem title="Efficiency" name="3">
      <div> Simplify the process: keep operating process simple and intuitive;</div>
      <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make
        decisions;
      </div>
      <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them
        from memorizing and recalling.
      </div>
    </CollapseItem>
    <CollapseItem title="Controllability" name="4">
      <div>Decision making: giving advices about operations is acceptable, but do
        not make decisions for the users;
      </div>
      <div>Controlled consequences: users should be granted the freedom to
        operate, including canceling, aborting or terminating current
        operation.
      </div>
    </CollapseItem>
  </Collapse>
</template>