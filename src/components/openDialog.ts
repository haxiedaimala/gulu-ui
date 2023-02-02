import {createApp, h} from 'vue';
import Dialog from './Dialog.vue';

interface Options {
  title: string,
  content: string,
  clickCloseOverlay: boolean,
  ok: () => boolean | void,
  cancle: () => boolean | void
}

export const openDialog = (options: Options) => {
  const {title, content, clickCloseOverlay, ok, cancle} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    app.unmount();
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          'onUpdate:visible': (newVisible: boolean) => {
            if (!newVisible) {
              close();
            }
          },
          clickCloseOverlay,
          ok,
          cancle
        },
        {
          header: title,
          content
        });
    }
  });
  //如果直接渲染挂载到body上，那body上的其他内容就会丢失被覆盖，因此挂载到div上，div再追加到body上
  app.mount(div);
};

/*
* 第一步：将Dialog挂载到页面上
*   createApp(xxx).mount(xxx)
*   但是不能直接挂载到body上，其他东西会消失，因此需要挂载中间变量div上，div在加入body上
* 第二步：需要给Dialog传props参数
*   因此需要render和h函数结合使用
*   render 创建虚拟的DOM树的函数
*   h 创建虚拟DOM 节点  h(字符串或者Vue组件，props参数，子节点插槽对象)
* 第三步：关闭Dialog时，需要将Dialog从div上卸载，并从body上删除div临时节点
*
* */