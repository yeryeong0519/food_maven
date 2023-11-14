import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/MainMap.vue';
import Login from '@/views/loginForm.vue';
import Signup from '@/views/Signup.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
];

const router = new VueRouter({
    routes,
    mode: 'history', // 선택 사항: URL에 #을 사용하지 않도록 설정
});

export default router;
