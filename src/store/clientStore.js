import * as axios from 'axios'

export default {
  state: {
    clients: [
      {rfc: '1233313232', name: 'cliente1', addres: 'djdnw', phoneNumber: 12132142342, saldo: 0, status: 'activo'},
      {rfc: '4739847237', name: 'cliente2', addres: 'djdnw1', phoneNumber: 12132142342, saldo: 0, status: 'activo'},
      {rfc: '4324384383', name: 'cliente3', addres: 'djdnw3', phoneNumber: 12132142342, saldo: 0, status: 'activo'},
      {rfc: '5468948548', name: 'cliente4', addres: 'djdn5', phoneNumber: 12132142342, saldo: 0, status: 'baja'},
      {rfc: '1231928823', name: 'cliente5', addres: 'djdnw7', phoneNumber: 12132142342, saldo: 0, status: 'activo'},
      {rfc: '3248389240', name: 'cliente6', addres: 'djdnw9', phoneNumber: 12132142342, saldo: 0, status: 'activo'}
    ]
  },
  getters: {
    allClients: state => state.clients
  },
  mutations: {
    addClient (state, payload) {
      state.clients.push(payload)
    },
    removeClient (state, {rfc}) {
      const index = state.clients.findIndex(client => client.rfc === rfc)
      state.clients.splice(index, 1)
    }
  },
  actions: {
    allClients: ({state, commit}) => {
      axios.get('http://localhost:3000/api/client')
        .then(response => {
          state.client = response.data.client
        })
        .catch(err => console.log(err))
    },
    removeClient: ({commit}, {name}) => {
      axios.delete(`http://localhost:3000/api/client/${name}`)
        .then(response => commit('removeClient', name))
        .catch(err => console.log(err))
    },
    addClient: ({commit}, payload) => {
      axios.post(`http://localhost:3000/api/client/`, payload)
        .then(response => commit('addClient', response.data.client))
        .catch(err => console.log(err))
    }
  }
}
