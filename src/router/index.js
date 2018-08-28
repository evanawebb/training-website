import Vue from 'vue'
import Router from 'vue-router'
import NavigationBar from '../components/NavigationBar.vue'
import home from '../components/home.vue'
import SocialMedia from '../components/SocialMedia.vue'

Vue.use(Router)

// components
window.Vue = require('vue')

// Vue Components
Vue.component('navigationbar', NavigationBar)
Vue.component('home', home)
Vue.component('socialmedia', SocialMedia)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: home
    },
    {
      path: '/social',
      name: 'social',
      component: SocialMedia

    }

  ]
})
