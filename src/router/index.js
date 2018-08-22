import Vue from 'vue'
import Router from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'

Vue.use(Router)

// components
window.Vue = require('vue')

// Vue Components
Vue.component('navigationbar', NavigationBar)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NavBar',
      component: NavigationBar
    }
  ]
})
