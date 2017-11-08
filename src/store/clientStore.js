
export default {
  state: {
    clients: []
  },
  getters: {
    allClients: state => state.clients
  },
  mutations: {
    addClient (state, payload) {
      state.clients.push(payload)
    }
  },
  actions: {
    allClients: state => state.getters.allClients
  }
}
