import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requeresAuth)){
    if(!store.getters.isloget){
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    }else{
      next();
    }
  }else{
    next();
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
