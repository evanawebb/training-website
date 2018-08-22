
// components
import NavigationBar from './components/NavigationBar.vue';
window.Vue = require('vue');
Vue.require('bootstrap');
vue.require('jquery');

// Vue Components
Vue.component('NavigationBar', NavigationBar)

function mounted () {
  window.dispatchEvent(new CustomEvent('vueMounted'))
}

new Vue({ el: '#app', mounted, store })
new Vue({ el: '#header', mounted, store })

require('./modules/scrollTo.js')
