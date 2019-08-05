import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../views/homePage'
import searchListPage from '../views/searchListPage'
import userPage from '../views/userPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/searchList/:query',
      name: 'searchListPage',
      component: searchListPage,
      props: true
    },
    {
      path: '/user',
      name: 'userPage',
      component: userPage
    }
  ]
})
