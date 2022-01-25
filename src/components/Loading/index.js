// import { createApp } from 'vue';
// import { addClass, removeClass } from "../../utils/dom";
import Loading from './Loading';

// const relativeCls = 'myRelative';

// export default function createLoadingDirective(Comp) {
//   return {
//     mounted (el, binding) {
//       console.log('mounted',el, binding, Comp);
//       // 创建app对象，根组件是自定义Loading
//       const app = createApp(Comp);
//       // 动态创建div节点，将app挂载在div上
//       const instance = app.mount(document.createElement('div'));
//       // 将instance添加到el上，因为updated也需要访问
//       const name = Comp.name;
//       if (!el[name]) {
//         el[name] = {}
//       }
//       el[name].instance = instance;
//
//       const title = binding.arg;
//       if (typeof title !== 'undefined') {
//         instance.setTitle(title);
//       }
//
//       if (binding.value) {
//         debugger;
//         append(el);
//       }
//       console.log(el);
//
//     },
//     updated (el, binding) {
//       console.log('updated', el, binding);
//       const title = binding.arg;
//       const name = Comp.name;
//       if (typeof title !== 'undefined') {
//         el[name].instance.setTitle(title)
//       }
//
//       if (binding.value !== binding.oldValue) {
//         console.log(binding.value);
//         binding.value ? append(el) : remove(el);
//       }
//     }
//   };
//
//   function append (el) {
//     const name = Comp.name;
//     const style = getComputedStyle(el);
//     console.log(style.position);
//     if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
//       addClass(el, relativeCls);
//     }
//     el.appendChild(el[name].instance.$el);
//   }
//   function remove (el) {
//     const name = Comp.name;
//     removeClass(el, relativeCls);
//     el.removeChild(el[name].instance.$el)
//   }
// }

const loading = {
  install (vue) {
    vue.component('loading', Loading);
  }
};
export default loading;
