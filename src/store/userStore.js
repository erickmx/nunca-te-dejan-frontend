
export default {
  state: {
    user: {
      username: 'erick',
      puesto: 'administrador'
    }
  },
  getters: {
    getUser: state => state.user
  },
  mutations: {
    setUser: (state, payload) => state.user = payload
  },
  actions: {
    getUser: (state, payload) => state.getters.getUser
  }
}
