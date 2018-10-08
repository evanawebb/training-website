import Vue from 'vue'
import Router from 'vue-router'
import NavigationBar from '../components/NavigationBar.vue'
import home from '../components/home.vue'
import SocialMedia from '../components/SocialMedia.vue'
import ContactUs from '../components/ContactUs.vue'
import horse from '../components/horse.vue'
import upload from '../components/Upload.vue'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(Router)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDx_kPb-1Tyud9DYSwAD0l_hNpl4LrxQG0', // TO DO: env file variable
    libraries: 'places'
  }
})

// components
window.Vue = require('vue')

// Vue Components
Vue.component('navigationbar', NavigationBar)
Vue.component('home', home)
Vue.component('socialmedia', SocialMedia)
Vue.component('contact', ContactUs)
Vue.component('upload', upload)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: home
    },
    {
      path: '/social',
      name: 'Social',
      component: SocialMedia

    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactUs
    },
    {
      path: '/horses',
      name: 'horses',
      component: horse
    },
    {
      path: '/upload',
      name: 'Upload',
      component: upload
    }
  ]
})
