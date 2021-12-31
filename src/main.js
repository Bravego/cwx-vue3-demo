import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import loadingDirective from './components/Loading/index'

const app = createApp(App);
app.use(router).directive('loading', loadingDirective).mount('#app');
