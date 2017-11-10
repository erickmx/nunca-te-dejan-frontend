
export default {
  state: {
    insumos: [
      {idInsumo: 1, description: 'papas', typeProduct: 'alimento', stock: 10, status: 'activo'},
      {idInsumo: 2, description: 'refresco', typeProduct: 'alimento', stock: 5, status: 'activo'},
      {idInsumo: 3, description: 'agua', typeProduct: 'alimento', stock: 3, status: 'rehabastecer'},
      {idInsumo: 4, description: 'papas adobadas', typeProduct: 'alimento', stock: 20, status: 'activo'}
    ]
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
