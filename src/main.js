import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import App from './App.vue'
import router from './routers'

const app = createApp(App)
app.use(router)  // router 추가
app.use(BootstrapVue3);  // bootstrap3 추가
app.mount('#app')
