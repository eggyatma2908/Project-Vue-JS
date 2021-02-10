import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    password: '',
    userId: null || localStorage.getItem('id'),
    accessToken: null || localStorage.getItem('accessToken'),
    refreshToken: null || localStorage.getItem('refreshToken'),
    photoProfile: '',
    loginUser: '',
    registeredUser: {},
    balance: [],
    users: [],
    userById: [],
    transaction: [],
    transfer: []
  },
  plugins: [createPersistedState()],
  mutations: {
    togglePassword (state) {
      state.password = document.getElementById('myInput')
      if (state.password.type === 'password') {
        state.password.type = 'text'
      } else {
        state.password.type = 'password'
      }
    },
    togglePassword1 (state) {
      state.password = document.getElementById('myInput1')
      if (state.password.type === 'password') {
        state.password.type = 'text'
      } else {
        state.password.type = 'password'
      }
    },
    userProfile (state, payload) {
      state.photoProfile = payload
    },
    userLogin (state, payload) {
      state.loginUser = payload
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
    },
    registered (state, payload) {
      state.registeredUser = payload
    },
    transferUser (state, payload) {
      state.transfer = payload
    },
    allUsers (state, payload) {
      state.users = payload
    },
    dataUserById (state, payload) {
      state.userById = payload
    },
    allTransaction (state, payload) {
      state.transaction = payload
    },
    userBalance (state, payload) {
      state.balance = payload
    },
    removeToken (state) {
      state.accessToken = null
      state.refreshToken = null
    }
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/users/login`, payload)
          .then((res) => {
            const result = res.data.result
            localStorage.setItem('accessToken', result.accessToken)
            localStorage.setItem('refreshToken', result.refreshToken)
            localStorage.setItem('id', result.id)
            context.commit('userProfile', '')
            context.commit('userLogin', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    logout (context) {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('id')
      context.commit('removeToken')
    },
    signUp (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/users/register`, payload)
          .then((res) => {
            const result = res.data.result
            context.commit('registered', result)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    transferUsers (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.post(`${process.env.VUE_APP_SERVICE_API}/transaction`, payload)
          .then((res) => {
            const result = res.data.result
            context.commit('transferUser', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    editPhone (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/users/${payload.userId}`, payload)
          .then((res) => {
            const result = res.data.result
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    editPin (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/users/editpin/${this.state.registeredUser.id}`, payload)
          .then((res) => {
            const result = res.data.result
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getAllUser (context) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users`)
          .then((res) => {
            const result = res.data.result.users
            context.commit('allUsers', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getUserById (context) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.id}`)
          .then((res) => {
            const result = res.data.result
            context.commit('dataUserById', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getAllTransaction (context) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.get(`${process.env.VUE_APP_SERVICE_API}/transaction`)
          .then((res) => {
            const result = res.data.result
            context.commit('userBalance', result.balance)
            context.commit('allTransaction', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updateUserProfile (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/users/profile/${localStorage.id}`, payload.formData)
          .then(res => {
            const result = res.data.result.filename
            context.commit('userProfile', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updateBalanceSender (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/users/balancesender/${payload.senderId}`, payload)
          .then(result => {
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updateBalanceReceiver (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorRequest')
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/users/balancereceiver/${payload.receiverId}`, payload)
          .then(result => {
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    interceptorRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    interceptorResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        return Promise.reject(error)
      })
    }
  },
  getters: {
    isLogin (state) {
      return state.accessToken !== null
    },
    userProfile (state) {
      return state.photoProfile
    },
    userLogin (state) {
      return state.loginUser
    },
    getUsers (state) {
      return state.users
    },
    getDataUserById (state) {
      return state.userById
    },
    getTransactions (state) {
      return state.transaction
    },
    getUserId (state) {
      return state.userId
    },
    getBalance (state) {
      return state.balance
    }
  },
  modules: {

  }
})
