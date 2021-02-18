import Vue from 'vue'
import Router from 'vue-router'
import Login from '@components/login'
import firstcomponent from '@/components/firstcomponent'
import secondcomponent from '@/components/secondcomponent'
import thirdcomponent from '@/components/thirdcomponent'
// import Header from './components/Header.vue'
//import HelloWorld1 from './components/HelloWorld1.vue'
// 0. 如果使用模块化机制编程，导入 Vue 和 VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来



// 现在，应用已经启动了！
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: firstcomponent
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/first',
            component: firstcomponent
        },

        {
            path: '/second',
            component: secondcomponent
        },
        {
            path: '/third',
            component: thirdcomponent
        }


    ]
})