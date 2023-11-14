import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import '@/common/Icons.js';
import router from './router';
import { createApp } from 'vue'
import Geolocation from 'vue-geolocation-api'

Vue.config.productionTip = false

createApp(App).use(router).mount('#app');
app.use(Geolocation)
app.use(router)
app.mount('#app')