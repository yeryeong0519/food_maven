import '@babel/polyfill';
import 'mutationobserver-shim';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Geolocation from 'vue-geolocation-api';
import '@/common/Icons.js';

const app = createApp(App);

app.use(Geolocation);
app.use(router);
app.mount('#app');
