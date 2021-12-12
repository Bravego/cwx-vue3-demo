import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import loading from './components/Loading'

const app = createApp(App);
app.use(router).use(loading).mount('#app');
