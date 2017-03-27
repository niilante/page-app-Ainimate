// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http'
import store from './vuex/store'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'; // 默认主题

Vue.use(Element)
Vue.config.productionTip = false;

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.http = axios;

Vue.config.errorHandler = function(err, vm) {
    // handle error
    console.log(err, vm)
}

console.log(router)

if (window.localStorage.getItem('ms_username')) {
    store.dispatch('login', JSON.parse(window.localStorage.getItem('ms_username')))
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    axios,
    template: '<App/>',
    components: { App }
})