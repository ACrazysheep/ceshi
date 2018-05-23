import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
        }
**/

export const constantRouterMap = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },

    {
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [{
            path: 'dashboard',
            name: 'dashboard',
            component: () =>
                import ('@/views/dashboard/index'), // 工作台
            meta: { title: '工作台', icon: 'tree' }
        }]
    }
]

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})


export const asyncRouterMap = [{
        path: '/company',
        component: Layout,
        redirect: '/company/basic-info',
        name: 'company', // 公司资料
        meta: {
            title: '公司资料',
            icon: 'example'
        },
        alwaysShow: true,
        children: [{
                path: 'basic-info',
                name: 'basic-info',
                component: () =>
                    import ('@/views/basic-info/index'), // 基础信息
                meta: {
                    title: '基础信息',
                    icon: 'table',
                    roles: ['basicinfo']
                }
            },
            {
                path: 'financial-info',
                name: 'financial-info',
                component: () =>
                    import ('@/views/financial-info/index'), // 财务信息
                meta: {
                    title: '财务信息',
                    icon: 'tree',
                    keepAlive: true,
                    roles: ['financialinfo']
                }
            }
        ]
    },

    {
        path: '/game',
        component: Layout,
        redirect: '/game/game-list',
        name: 'game', // 我的游戏
        meta: {
            title: '我的游戏',
            icon: 'example'
        },
        // alwaysShow: true,
        children: [{
            path: 'game-list',
            name: 'game-list',
            component: () =>
                import ('@/views/game-list/index'), // 游戏列表
            meta: {
                title: '游戏列表',
                icon: 'form',
                roles: ['gamelist']
            }
        }]
    },
    { path: '*', redirect: '/404', hidden: true }
]