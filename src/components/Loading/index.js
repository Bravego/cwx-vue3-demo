import Loading from './Loading';
import { createApp } from 'vue';

export default function () {
  const loadingDirective = {
    mounted (el, binding) {
      // 创建app对象，根组件是自定义Loading
      const app = createApp(Loading);
      // 动态创建div节点，将app挂载在div上
      const instance = app.mount(document.createElement('div'))
      // 将instance添加到el上，因为updated也需要访问
      el.instance = instance
      if (binding.value) {
        append(el);
      }
      console.log(el);

    },
    updated (el, binding) {
      if (!binding.value) {
        remove(el)
      }
      append(el)
      console.log(el);
    }
  }

  function append (el) {
    el.appendChild(el.instance.$el);
  }
  function remove (el) {
    el.removeChild(el.instance.$el)
  }

  return loadingDirective;
}

