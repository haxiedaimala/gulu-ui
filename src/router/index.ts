import {createWebHashHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import SwitchDemo from '../views/doc/Switch.vue';
import ButtonDemo from '../views/doc/Button.vue';
import DialogDemo from '../views/doc/Dialog.vue';
import TabsDemo from '../views/doc/Tabs.vue';
import Input from '../views/doc/Input.vue';
import Layout from '../views/doc/Layout.vue';
import Container from '../views/doc/Container.vue';
import Toast from '../views/doc/Toast.vue';
import Popover from '../views/doc/Popover.vue';
import Collapse from '../views/doc/Collapse.vue';
import Markdown from '../components/Markdown.vue';
import {h} from 'vue';
import intro from '../markdown/intro.md';
import install from '../markdown/install.md';
import getStart from '../markdown/getStart.md';

const md = (component: string, key: string) => h(Markdown, {content: component, key: key});
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: '',
          redirect: '/doc/intro'
        }, {
          path: 'intro',
          component: md(intro, 'intro')
        }, {
          path: 'install',
          component: md(install, 'install')
        }, {
          path: 'get-started',
          component: md(getStart, 'getStart')
        }, {
          path: 'switch',
          component: SwitchDemo
        }, {
          path: 'button',
          component: ButtonDemo
        }, {
          path: 'dialog',
          component: DialogDemo
        }, {
          path: 'tabs',
          component: TabsDemo
        }, {
          path: 'input',
          component: Input
        }, {
          path: 'layout',
          component: Layout
        }, {
          path: 'container',
          component: Container
        }, {
          path: 'toast',
          component: Toast
        }, {
          path: 'popover',
          component: Popover
        }, {
          path: 'collapse',
          component: Collapse
        }]
    }]
});