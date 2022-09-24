import {createRouter , createWebHistory} from 'vue-router';

const routes = [
    {
        name : 'login',
        path : '/',
        alias: '/login',
        component : () => import('../pages/common/LoginPage.vue'),
        meta: {
            requiresAuth : false,
            isAdmin : false,
            isModerator : false,
            isInstructor : false,
            isUser: true,
        }
    },
    {

        name : 'home',
        path : '/home',
        component : () => import('../pages/common/HomePage.vue'),
        meta: {
            requiresAuth : false,
            isAdmin : false,
            isModerator : false,
            isInstructor : false,
            isUser: true,
        }

    },


];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;