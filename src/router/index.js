import Vue from 'vue'
import Router from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
import footer from '@/components/footer.vue'

Vue.use(Router)

// components
window.Vue = require('vue')

// Vue Components
Vue.component('navigationbar', NavigationBar)
Vue.component('footer', footer)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'footer',
      component: footer
    }
  ]
})
