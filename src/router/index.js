import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../views/homePage'
import userPage from '../views/userPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/user',
      name: 'userPage',
      component: userPage
    }
  ]
})
