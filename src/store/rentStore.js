
export default {
  state: {
    rents: []
  },
  getters: {
    allRents: state => state.rents
  },
  mutations: {
    addRent (state, payload) {
      state.rents.push(payload)
    }
  },
  actions: {
    allRents: state => state.getters.allRents
  }
}
