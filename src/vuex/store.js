import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.prototype.http = axios

import login from './modules/login.js'

const store = new Vuex.Store({
    modules: {
        login
    }
})

export default store