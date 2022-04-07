import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'

const routers:Array<RouteRecordRaw> = [
    {
        path:'/',
        component:()=>import('com/HelloWorld.vue')
    },
    {
        path:'/definProps',
        component:()=>import('com/defineProps.vue')
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes:routers
})

export default router