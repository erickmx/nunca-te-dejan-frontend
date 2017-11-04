import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Driver from '@/components/driver/Driver'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/driver',
      name: 'Driver',
      component: Driver
    }
  ]
})
