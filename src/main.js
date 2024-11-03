import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

const app = createApp(App);
app.use(router); // Usa el router en la aplicación Vue
app.mount('#app');
