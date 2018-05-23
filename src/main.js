import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // 图标引入
import '@/permission' // 请求拦截
import './mock' // 模拟数据

Vue.use(ElementUI, { locale })
    // Vue.use(ElementUI, {
    //     size: 'medium', // set element-ui default size
    //     i18n: (key, value) => i18n.t(key, value)
    // })


Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})