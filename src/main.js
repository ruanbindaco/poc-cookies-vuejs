import Vue from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'

// default options config: { expires: '1d', path: '/', domain: '', secure: '', sameSite: 'Lax' }
Vue.use(VueCookies)

new Vue({
  render: h => h(App),
}).$mount('#app')
