import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: '/wall?id=0',
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