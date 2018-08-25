import Vue from 'vue'
import Router from 'vue-router'
import NavigationBar from '../components/NavigationBar.vue'
import home from '../components/home.vue'

Vue.use(Router)

// components
window.Vue = require('vue')

// Vue Components
Vue.component('navigationbar', NavigationBar)
Vue.component('home', home)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: home
    }
  ]
})
