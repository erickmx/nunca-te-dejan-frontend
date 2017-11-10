
export default {
  state: {
    employees: [
      {rfc: '1233313232', name: 'empleado1', addres: 'djdnw', phoneNumber: 12132142342, area: 'ventas', status: 'activo'},
      {rfc: '4739847237', name: 'empleado2', addres: 'djdnw1', phoneNumber: 12132142342, area: 'garaje', status: 'activo'},
      {rfc: '4324384383', name: 'empleado3', addres: 'djdnw3', phoneNumber: 12132142342, area: 'ventas', status: 'activo'},
      {rfc: '5468948548', name: 'empleado4', addres: 'djdn5', phoneNumber: 12132142342, area: 'almacen', status: 'baja'},
      {rfc: '1231928823', name: 'empleado5', addres: 'djdnw7', phoneNumber: 12132142342, area: 'ventas', status: 'activo'},
      {rfc: '3248389240', name: 'empleado6', addres: 'djdnw9', phoneNumber: 12132142342, area: 'ventas', status: 'activo'}
    ]
  },
  getters: {
    allEmployees: state => state.employees
  },
  mutations: {
    addEmployee (state, payload) {
      state.employees.push(payload)
    }
  },
  actions: {
    allEmployees: state => state.getters.allEmployees
  }
}
