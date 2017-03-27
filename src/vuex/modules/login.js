import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'
Vue.use(Vuex)

const state = {
    user: {},
    title: ''
}
const actions = {
    login: function({ commit }, status) {
        window.localStorage.setItem('ms_username',JSON.stringify(status));
        commit(types.LOGIN, status)
    }
}
const mutations = {
    [types.LOGIN](state, status) {
        state.user = status;
    }
}

const getters = {
    completeLogin: state => state.user
}

export default {
    state,
    mutations,
    actions,
    getters
}