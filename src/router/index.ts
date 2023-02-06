import {createWebHashHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import SwitchDemo from '../views/SwitchDemo.vue';
import ButtonDemo from '../views/ButtonDemo.vue';
import DialogDemo from '../views/DialogDemo.vue';
import TabsDemo from '../views/TabsDemo.vue';
import Markdown from '../components/Markdown.vue';
import {h} from 'vue';

const md = (filename: string) => h(Markdown, {path: `../markdown/${filename}.md`, key: filename});
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
          component: md('intro')
        }, {
          path: 'install',
          component: md('install')
        }, {
          path: 'get-started',
          component: md('getStart')
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
        }]
    }]
});