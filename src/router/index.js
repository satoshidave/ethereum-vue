import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Desktop from '@/views/Desktop'
import Mobile from '@/views/Mobile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/desktop',
      name: 'Desktop',
      component: Desktop
    },
    {
      path: '/mobile',
      name: 'Mobile',
      component: Mobile
    }
  ]
})
