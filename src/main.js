// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueQRCodeComponent from 'vue-qrcode-component'
import VueClipboards from 'vue-clipboards'
import store from './store'
import '@/assets/fontawesome/css/fontawesome-all.min.css'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/styles.css'
import 'babel-polyfill'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueClipboards)
Vue.component('qr-code', VueQRCodeComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
