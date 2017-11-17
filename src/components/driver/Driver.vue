<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">
        <driver-form :dialog.sync="showForm"></driver-form>
        <v-card>
          <v-card-title>
            Choferes
            <v-spacer></v-spacer>

            <v-btn
              outline
              color="success"
              :loading="loading"
              @click.native="addItem"
              :disabled="loading"
            >
              <v-icon>add</v-icon>
              <span slot="loader" class="custom-loader">
                <v-icon light>cached</v-icon>
              </span>
            </v-btn>

            <v-text-field
              append-icon="search"
              label="Search"
              single-line
              hide-details
              v-model="search"
            ></v-text-field>
          </v-card-title>
          <v-data-table
              v-bind:headers="headers"
              v-bind:items="items"
              v-bind:search="search"
            >
            <template slot="items" scope="props">
              <td>
                <v-edit-dialog
                  lazy
                > {{ props.item.name }}
                  <v-text-field
                    slot="input"
                    label="Edit"
                    v-model="props.item.name"
                    single-line
                    counter
                    :rules="[max25chars]"
                  ></v-text-field>
                </v-edit-dialog>
              </td>
              <td class="text-xs-right">{{ props.item.phoneNumber }}</td>
              <!-- <td class="text-xs-right">{{ props.item.status }}</td> -->
              <td class="text-xs-right">
                <v-edit-dialog
                  @open="tmp = props.item.status"
                  @save="props.item.status = tmp || props.item.status"
                  large
                  lazy
                >
                  <div>{{ props.item.status }}</div>
                  <div slot="input" class="mt-3 title">Update Status</div>
                  <v-text-field
                    slot="input"
                    label="Edit"
                    v-model="tmp"
                    single-line
                    counter
                    autofocus
                    :rules="[max25chars]"
                  ></v-text-field>
                </v-edit-dialog>
              </td>
              <td class="text-xs-right">
                <v-btn
                  outline
                  color="info"
                  :loading="props.item.loading"
                  @click.native="editItem(props.item)"
                  :disabled="props.item.loading"
                >
                  <v-icon>edit</v-icon>
                  <span slot="loader" class="custom-loader">
                    <v-icon light>cached</v-icon>
                  </span>
                </v-btn>
                <v-btn
                  outline
                  color="error"
                  :loading="props.item.loading"
                  @click.native="deleteItem(props.item)"
                  :disabled="props.item.loading"
                >
                  <v-icon>delete</v-icon>
                  <span slot="loader" class="custom-loader">
                    <v-icon light>cached</v-icon>
                  </span>
                </v-btn>
              </td>
            </template>
            <template slot="pageText" scope="{ pageStart, pageStop }">
              From {{ pageStart }} to {{ pageStop }}
            </template>
          </v-data-table>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import DriverForm from '@/components/driver/DriverForm'

export default {
  name: 'driver',
  components: {
    'driver-form': DriverForm
  },
  data () {
    return {
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      tmp: '',
      search: '',
      pagination: {},
      headers: [
        {
          text: 'Conductor',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Telefono', value: 'phoneNumber' },
        { text: 'Estatus', value: 'status' },
        { text: 'Opciones', value: 'options' }
      ],
      loading: false,
      showForm: false
    } // end-return
  }, // end-data
  computed: {
    items () {
      const items = this.$store.getters.allDrivers
      // this.$store.dispatch('allDrivers')
      return items.map(item => {
        return {
          value: false,
          loading: false,
          ...item
        }
      })
    }
  },
  methods: {
    editItem (item) {
      item.loading = true

      setTimeout(() => {
        item.loading = false
      }, 1000)
    },
    deleteItem (item) {
      item.loading = true

      setTimeout(() => {
        item.loading = false
        const {name} = item
        this.$store.dispatch('removeDriver', {name})
        // this.$store.commit('removeDriver', name)
      }, 1000)
    },
    addItem () {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.showForm = true
      }, 1000)
    }
  },
  mounted () {
    this.$store.dispatch('allDrivers')
  }
  // watch: {
  //   loader () {
  //     const l = this.loading
  //     this[l] = !this[l]
  //
  //     setTimeout(() => {
  //       this[l] = false
  //     }, 3000)
  //
  //     this.loading = null
  //   }
  // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
