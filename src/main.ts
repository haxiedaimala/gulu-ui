import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import {createWebHashHistory, createRouter} from 'vue-router';
import Demo from './components/Demo.vue';
import Demo2 from './components/Demo2.vue'

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      component: Demo
    },
    {
      path:'/xxx',
      component:Demo2
    }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
