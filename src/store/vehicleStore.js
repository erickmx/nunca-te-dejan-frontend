
export default {
  state: {
    vehicles: []
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
