// Conteúdo copiado de src/main.ts para resolver problemas de build
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './src/App.vue'
import router from './src/router'
import './src/assets/css/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app') 