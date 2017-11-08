import Vue from 'vue'
import Vuex from 'vuex'

import clientStore from './clientStore'
import driverStore from './driverStore'
import employeeStore from './employeeStore'
import insumoStore from './insumoStore'
import rentStore from './rentStore'
import vehicleStore from './vehicleStore'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    clientStore,
    driverStore,
    employeeStore,
    insumoStore,
    rentStore,
    vehicleStore
  }
})
