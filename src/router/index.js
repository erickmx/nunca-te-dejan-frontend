import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Client from '@/components/client/Client'
import Driver from '@/components/driver/Driver'
import Employee from '@/components/employee/Employee'
import Insumo from '@/components/insumo/Insumo'
import Rent from '@/components/rent/Rent'
import Vehicle from '@/components/vehicle/Vehicle'
import Error404 from '@/components/generic/Error404'

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
      path: '/client',
      name: 'Client',
      component: Client
    },
    {
      path: '/driver',
      name: 'Driver',
      component: Driver
    },
    {
      path: '/employee',
      name: 'Employee',
      component: Employee
    },
    {
      path: 'insumo',
      name: 'Insumo',
      component: Insumo
    },
    {
      path: '/rent',
      name: 'Rent',
      component: Rent
    },
    {
      path: '/vehicle',
      name: 'Vehicle',
      component: Vehicle
    },
    {
      path: '*',
      name: 'Error404',
      component: Error404
    }
  ]
})
