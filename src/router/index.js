import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/Index.vue'
import Home from '../views/main/Home.vue'
import History from '../views/main/History.vue'
import Transfer from '../views/main/Transfer.vue'
import Inputtransfer from '../views/main/Inputtransfer.vue'
import Confirmation from '../views/main/Confirmation.vue'
import Profile from '../views/main/Profile.vue'
import Personalinformation from '../views/main/Personalinformation.vue'
import Addphone from '../views/main/Addphone.vue'
import Managephone from '../views/main/Managephone.vue'
import Topup from '../views/main/Topup.vue'
import Success from '../views/main/Success.vue'
import Failed from '../views/main/Failed.vue'
import Auth from '../views/auth/Index.vue'
import Login from '../views//auth/Login.vue'
import Loginerror from '../views//auth/Loginerror.vue'
import Signup from '../views/auth/Signup.vue'
import Resetpassword from '../views/auth/Resetpassword.vue'
import Createnewpassword from '../views/auth/Createnewpassword.vue'
import Createpin from '../views/auth/Createpin.vue'
import Pinsuccess from '../views/auth/Pinsuccess.vue'
import EmailVerification from '../views/email/EmailVerification.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main/home',
    meta: { requiresAuth: true }
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    redirect: '/main/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
      },
      {
        path: 'history',
        name: 'History',
        component: History,
        meta: { requiresAuth: true }
      },
      {
        path: 'transfer',
        name: 'Transfer',
        component: Transfer,
        meta: { requiresAuth: true }
      },
      {
        path: 'inputtransfer/:id',
        name: 'Inputtransfer',
        component: Inputtransfer,
        meta: { requiresAuth: true }
      },
      {
        path: 'confirmation',
        name: 'Confirmation',
        component: Confirmation,
        meta: { requiresAuth: true }
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: { requiresAuth: true }
      },
      {
        path: 'personalinfo',
        name: 'Personalinformation',
        component: Personalinformation,
        meta: { requiresAuth: true }
      },
      {
        path: 'addphone',
        name: 'Addphone',
        component: Addphone,
        meta: { requiresAuth: true }
      },
      {
        path: 'managephone',
        name: 'Managephone',
        component: Managephone,
        meta: { requiresAuth: true }
      },
      {
        path: 'success',
        name: 'Success',
        component: Success,
        meta: { requiresAuth: true }
      },
      {
        path: 'failed',
        name: 'Failed',
        component: Failed,
        meta: { requiresAuth: true }
      },
      {
        path: 'topup',
        name: 'Topup',
        component: Topup,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/emailverification/:email',
    name: 'EmailVerification',
    component: EmailVerification,
    meta: { requiresVisitor: true }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: { requiresVisitor: true }
      },
      // (unused)
      {
        path: 'loginerror',
        name: 'Loginerror',
        component: Loginerror,
        redirect: '/'
      },
      {
        path: 'signup',
        name: 'Signup',
        component: Signup,
        meta: { requiresVisitor: true }
      },
      // (unused)
      {
        path: 'resetpassword',
        name: 'Resetpassword',
        component: Resetpassword,
        redirect: '/'
      },
      // (unused)
      {
        path: 'createpin',
        name: 'Createpin',
        component: Createpin,
        redirect: '/'
      },
      // (unused)
      {
        path: 'pinsuccess',
        name: 'Pinsuccess',
        component: Pinsuccess,
        redirect: '/'
      },
      // (unused)
      {
        path: 'createnewpassword',
        name: 'Createnewpassword',
        component: Createnewpassword,
        redirect: '/'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({ path: '/auth/login' })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
