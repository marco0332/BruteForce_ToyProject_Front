// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import store from './store'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import './assets/css/myGrid.css'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoA11y = true

Vue.prototype.$http = axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  store.commit('setView', {curView: to.name})
  next()
})

/* eslint-disable no-new */
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
