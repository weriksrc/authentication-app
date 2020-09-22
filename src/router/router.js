import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home.'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: home
    },
    {
      path: '/foo',
      name: 'foo',
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/*webpackChunkName: "ABOUT" */ 'views/About.vue')  
    },
  ]
})