import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import loadingDirective from './directive/index'
import loading from './components/Loading/index';
const app = createApp(App);
app.use(router).use(loading).mount('#app');
