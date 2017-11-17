import * as axios from 'axios'

export default {
  state: {
    drivers: [
      // { name: 'fulano1', phoneNumber: 3392666579, status: 'libre' },
      // { name: 'fulano2', phoneNumber: 3366458575, status: 'servicio' },
      // { name: 'fulano3', phoneNumber: 3374346754, status: 'servicio' },
      // { name: 'fulano4', phoneNumber: 3397860638, status: 'servicio' }
    ]
  },
  getters: {
    allDrivers: state => state.drivers,
    activeDrivers: state => {
      return state.drivers.filter(driver => driver.status !== 'baja')
    },
    getDriver: (state, getters) => (name) => {
      return state.drivers.find(driver => driver.name === name)
    }
  },
  mutations: {
    driverStatus (state, payload) {
      state.drivers.find(driver => driver.name === payload.name)
        .status = payload.status
    },
    addDriver (state, payload) {
      state.drivers.push(payload)
    },
    removeDriver (state, {name}) {
      const index = state.drivers.findIndex(driver => driver.name === name)
      state.drivers.splice(index, 1)
    },
    modifyDriver (state, payload) {
      const index = state.drivers.findIndex(driver => driver.name === payload.oldName)
      const { name, phoneNumber, status } = payload
      state.drivers[index] = { name, phoneNumber, status }
    }
  },
  actions: {
    allDrivers: ({state, commit}) => {
      axios.get('http://localhost:3000/api/driver')
        .then(response => {
          state.drivers = response.data.drivers
        })
        .catch(err => console.log(err))
    },
    removeDriver: ({commit}, {name}) => {
      axios.delete(`http://localhost:3000/api/driver/${name}`)
        .then(response => commit('removeDriver', name))
        .catch(err => console.log(err))
    },
    addDriver: ({commit}, payload) => {
      axios.post(`http://localhost:3000/api/driver/`, payload)
        .then(response => commit('addDriver', response.data.driver))
        .catch(err => console.log(err))
    }
  }
}
