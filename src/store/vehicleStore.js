
export default {
  state: {
    vehicles: [
      {placas: 'nswshwbsh', model: 'standar', status: 'activo', priceDay: 100},
      {placas: 'nswbsh', model: 'standar', status: 'activo', priceDay: 100},
      {placas: 'nswsh322sh', model: 'avion', status: 'activo', priceDay: 200},
      {placas: '32432wshwbsh', model: 'standar', status: 'activo', priceDay: 100}
    ]
  },
  getters: {
    allVehicles: state => state.vehicles
  },
  mutations: {
    addVehicle (state, payload) {
      state.vehicles.push(payload)
    }
  },
  actions: {
    allVehicles: state => state.getters.allVehicles
  }
}
