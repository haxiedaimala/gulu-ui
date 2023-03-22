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
  position?: 'top' | 'bottom' | 'center',
}
const toastWrapper = document.createElement('div');
toastWrapper.setAttribute('id', 'gulu-toast-wrapper');
document.documentElement.appendChild(toastWrapper);
export const openToast = (options: Options) => {
  const {
    message,
    autoClose = true,
    autoCloseDelay = 3,
    showClose = false,
    modelValue = true,
    type = 'info',
    enableHtml = false,
    position = 'top',
  } = options;
  const div = document.createElement('div');
  toastWrapper.appendChild(div);
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
          position,
        },
        {
          default: () => message
        }
      );
    }
  });
  if (toastWrapper.children.length > 1) {
    toastWrapper.children[0].remove();
  }
  app.mount(div);
};

