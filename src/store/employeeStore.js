
export default {
  state: {
    employees: []
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
