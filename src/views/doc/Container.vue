<script setup lang="ts">
import ContainerSourceCode1 from '../../sourceCode/container/container1.sourceCode.vue';
import ContainerSourceCode2 from '../../sourceCode/container/container2.sourceCode.vue';
import ContainerSourceCode3 from '../../sourceCode/container/container3.sourceCode.vue';
import ContainerSourceCode4 from '../../sourceCode/container/container4.sourceCode.vue';
import ContainerSourceCode5 from '../../sourceCode/container/container5.sourceCode.vue';
import ContainerSourceCode6 from '../../sourceCode/container/container6.sourceCode.vue';
import Demo from '../../components/Demo.vue';
</script>

<template>
  <h1>Container 布局容器</h1>
  <div class="gulu-doc-detail">
    <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
    <p>&lt;g-container&gt;：外层容器。 当子元素中包含或&lt;g-header&gt;&lt;g-footer&gt;时，全部子元素会垂直上下排列， 否则会水平左右排列。</p>
    <p>&lt;g-header&gt;顶栏容器。</p>
    <p> &lt;g-aside&gt;：侧边栏容器。</p>
    <p>&lt;g-main&gt;：主要区域容器。</p>
    <p>&lt;g-footer&gt;：底栏容器。</p>
  </div>
  <Demo :component="ContainerSourceCode1"/>
  <Demo :component="ContainerSourceCode2"/>
  <Demo :component="ContainerSourceCode3"/>
  <Demo :component="ContainerSourceCode4"/>
  <Demo :component="ContainerSourceCode5"/>
  <Demo :component="ContainerSourceCode6"/>
</template>