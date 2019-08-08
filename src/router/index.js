import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/base/index'

Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
]


export default new Router({
    routes: constantRouterMap
})
