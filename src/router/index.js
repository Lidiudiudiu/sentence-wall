import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: '/wall',
        component: () => import('@/views/Myindex.vue'),
        children: [
            {
                path: 'wall',
                component: () => import('../views/WallMessage.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router