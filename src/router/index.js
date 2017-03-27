import Vue from 'vue'
import Router from 'vue-router'


const login = r => require.ensure([], () => r(require('@/components/page/login')), 'login')
const home = r => require.ensure([], () => r(require('@/components/common/home')), 'home')

const main = r => require.ensure([], () => r(require('@/components/page/main')), 'main')

Vue.use(Router)

// 增强原方法，好处是旧的业务模块不需要任何变动
Router.prototype.go = function () {
  this.isBack = true
  window.history.go(-1)
}
// 或者你可以新建一个方法
Router.prototype.goBack = function () {
  this.isBack = true
  this.go(-1)
}

export default new Router({
    mode: 'history',
    hashbang: false,
    history: true,
    transitionOnLoad:true,
    routes: [{
        path: '/',
        name: 'login',
        component: login
    }, {
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/home',
        name: 'home',
        component: home,
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
        children: [{
            path: '/',
            meta: {
                requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            },
            component: main
        }, ]
    }]
})