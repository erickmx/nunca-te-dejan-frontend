
export default {
  state: {
    insumos: []
  },
  getters: {
    allInsumos: state => state.insumos
  },
  mutations: {
    addInsumo (state, payload) {
      state.insumos.push(payload)
    }
  },
  actions: {
    allInsumos: state => state.getters.allInsumos
  }
}
