import axios from 'axios'
import store from './vuex/store'
import * as types from './vuex/modules/types'
import router from './router/index'



router.beforeEach((to, from, next) => {
    if (to.matched.every((ele) => { return ele.meta.requireAuth })) { // 判断该路由是否需要登录权限
        if (store.state.login.user.username) { // 通过vuex state获取当前的token是否存在
            next();
        } else {
            next({
                path: '/login',
            })
        }
    } else {
        next();
    }
})


// axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'www.baidu.com';
// console.log(axios.interceptors.request)
// // http request 拦截器
// axios.interceptors.request.use(
//     config => {
//         if (store.state.login.token) {
//             config.headers.Authorization = `token ${store.state.token}`;
//         }
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     });

// // http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         if (error.response) {
//             switch (error.response.status) {
//                 case 401:
//                     // 401 清除token信息并跳转到登录页面
//                     store.commit(types.LOGOUT);
//                     router.replace({
//                         path: 'login',
//                         query: { redirect: router.currentRoute.fullPath }
//                     })
//             }
//         }
//         // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
//         return Promise.reject(error.response.data)
//     });

export default axios;