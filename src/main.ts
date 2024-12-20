import '@picocss/pico';
import './css/style.scss';

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';

const app = createApp(App)

const pinia = createPinia();
app.use(pinia);

app.mount('#app')
