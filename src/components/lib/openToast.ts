import Toast from './Toast.vue';
import {createApp, h} from 'vue';

type Options = {
  message: string;
}
export const openToast = (options: Options) => {
  const {message} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  createApp({
    render() {
      return h(
        Toast,
        {},
        {
          default: message
        }
      );
    }
  }).mount(div);
};

