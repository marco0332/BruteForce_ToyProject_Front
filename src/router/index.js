import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../views/homePage'
import searchListPage from '../views/searchListPage'
import userPage from '../views/userPage'
import questionDetailPage from '../views/questionDetailPage'
import writeQuestionPage from '../views/writeQuestionPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
      path: '/user/:userId',
      name: 'userPage',
      component: userPage,
      props: true
    },
    {
      path: '/questionDetailPage/:qId',
      name: 'questionDetailPage',
      component: questionDetailPage,
      props: true
    },
    {
      path: '/writeQuestion',
      name: 'writeQuestion',
      component: writeQuestionPage,
      props: true
    }
  ]
})
