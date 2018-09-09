// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import scss from '@/assets/sass/main.scss'

Vue.use(scss)
Vue.config.productionTip = false
require('dotenv').config()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, scss },
  template: '<App/>'
})
