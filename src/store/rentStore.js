
export default {
  state: {
    rents: []
  },
  getters: {
    allRents: state => state.rents,
    getRent: (state, getters) => folio => {
      return state.rents.find(rent => rent.folio === folio)
    }
  },
  mutations: {
    addRent (state, payload) {
      state.rents.push(payload)
    },
    rentStatus (state, {folio, status}) {
      state.rents.find(rent => rent.folio === folio)
        .status = status
    },
    removeRent (state, {folio}) {
      const index = state.rents.findIndex(rent => rent.folio === folio)
      state.rents.splice(index, 1)
    },
    modifyRent (state, payload) {
      const index = state.rents.findIndex(rent => rent.folio === payload.folio)
      const { folio, rfcClient, rfcEmployee, placas, driverName, status } = payload
      state.drivers[index] = { folio, rfcClient, rfcEmployee, placas, driverName, status }
    }
  },
  actions: {
    allRents: state => state.getters.allRents
  }
}
