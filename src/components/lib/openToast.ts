import Toast from './Toast.vue';
import {createApp, h} from 'vue';

type Options = {
  message: string;
  autoClose: boolean,
  autoCloseDelay: number,
  modelValue?: boolean
}
export const openToast = (options: Options) => {
  const {message, autoClose, autoCloseDelay} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(
        Toast,
        {
          autoClose,
          autoCloseDelay,
          modelValue: true,
          'onUpdate:modelValue': (newValue: boolean) => {
            if (!newValue) {
              app.unmount();
              div.remove();
            }
          }
        },
        {
          default: message
        }
      );
    }
  });
  app.mount(div);
};

