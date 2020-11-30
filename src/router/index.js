import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Transfer from '../views/Transfer.vue'
import Inputtransfer from '../views/Inputtransfer.vue'
import Addphone from '../views/Addphone.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import Resetpassword from '../views/auth/Resetpassword.vue'
import Createnewpassword from '../views/auth/Createnewpassword.vue'
import Createpin from '../views/auth/Createpin.vue'
import Pinsuccess from '../views/auth/Pinsuccess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer
  },
  {
    path: '/inputtransfer',
    name: 'Inputtransfer',
    component: Inputtransfer
  },
  {
    path: '/addphone',
    name: 'Addphone',
    component: Addphone
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/resetpassword',
    name: 'Resetpassword',
    component: Resetpassword
  },
  {
    path: '/createpin',
    name: 'Createpin',
    component: Createpin
  },
  {
    path: '/pinsuccess',
    name: 'Pinsuccess',
    component: Pinsuccess
  },
  {
    path: '/createnewpassword',
    name: 'Createnewpassword',
    component: Createnewpassword
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
