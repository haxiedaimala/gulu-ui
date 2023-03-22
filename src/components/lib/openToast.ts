import Toast from './Toast.vue';
import {createApp, h} from 'vue';

type Options = {
  message: string;
  autoClose?: boolean,
  autoCloseDelay?: number,
  modelValue?: boolean,
  showClose?: boolean,
  type?: 'success' | 'warning' | 'info' | 'error',
  enableHtml?: boolean,
}
export const openToast = (options: Options) => {
  const {
    message,
    autoClose = true,
    autoCloseDelay = 3,
    showClose = false,
    modelValue = true,
    type = 'info',
    enableHtml = false
  } = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(
        Toast,
        {
          autoClose,
          autoCloseDelay,
          modelValue: modelValue,
          'onUpdate:modelValue': (newValue: boolean) => {
            if (!newValue) {
              app.unmount();
              div.remove();
            }
          },
          showClose,
          type,
          enableHtml,
        },
        {
          default: () => message
        }
      );
    }
  });
  app.mount(div);
};

