import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Current from '@/components/Current'
import Forecast from '@/components/Forecast'
import About from '@/components/About'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/current/:query',
      name: 'Current',
      component: Current
    },
    {
      path: '/forecast/:seven_days_forecast',
      name: 'Forecast',
      component: Forecast      
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
