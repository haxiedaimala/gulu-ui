import {createWebHashHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import SwitchDemo from '../views/SwitchDemo.vue';
import ButtonDemo from '../views/ButtonDemo.vue';
import DialogDemo from '../views/DialogDemo.vue';
import TabsDemo from '../views/TabsDemo.vue';
import DocDemo from '../views/DocDemo.vue';
import Intro from '../views/Intro.vue';
import Install from '../views/Install.vue';
import GetStarted from '../views/GetStarted.vue';

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
          component: DocDemo
        }, {
          path: 'intro',
          component: Intro
        }, {
          path: 'install',
          component: Install
        }, {
          path: 'get-started',
          component: GetStarted
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