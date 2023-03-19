import {createApp} from 'vue';
import './components/lib/gulu.scss';
import './style.scss';
import App from './App.vue';
import {router} from './router';
import 'github-markdown-css';

const app = createApp(App);
app.use(router);
app.mount('#app');
