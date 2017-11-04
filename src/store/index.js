import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    drivers: [
      { name: 'fulani1', phoneNumber: 3392666579, status: 'libre' },
      { name: 'fulano2', phoneNumber: 3366458575, status: 'servicio' },
      { name: 'fulano3', phoneNumber: 3374346754, status: 'servicio' },
      { name: 'fulano4', phoneNumber: 3397860638, status: 'servicio' }
    ]
  }
})

export default store
