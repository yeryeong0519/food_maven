import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/MainMap.vue';
import Login from '@/views/loginForm.vue';
import Signup from '@/views/SignupForm.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
