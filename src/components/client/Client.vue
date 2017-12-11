<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">

        <client-form :dialog.sync="showForm"/>

        <v-card>
          <v-card-title>
            Clientes
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
                > {{ props.item.rfc }}
                  <v-text-field
                    slot="input"
                    label="Edit"
                    v-model="props.item.rfc"
                    single-line
                    counter
                    :rules="[max25chars]"
                  ></v-text-field>
                </v-edit-dialog>
              </td>
              <td class="text-xs-right">{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.phoneNumber }}</td>
              <td class="text-xs-right">{{ props.item.saldo }}</td>
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

import ClientForm from '@/components/client/ClientForm'

export default {
  name: 'client',
  components: {
    'client-form': ClientForm
  },
  data () {
    return {
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      tmp: '',
      search: '',
      pagination: {},
      headers: [
        {
          text: 'RFC',
          align: 'left',
          sortable: false,
          value: 'rfc'
        },
        { text: 'Nombre', value: 'name' },
        { text: 'Telefono', value: 'phoneNumber' },
        { text: 'Saldo', value: 'saldo' },
        { text: 'Estatus', value: 'status' },
        { text: 'Opciones', value: 'options' }
      ],
      loading: false,
      showForm: false
    } // end-return
  }, // end-data
  computed: {
    items () {
      const items = this.$store.getters.allClients
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
    deleteItem (item) {
      item.loading = true

      setTimeout(() => {
        item.loading = false
        const {rfc} = item
        this.$store.commit('removeClient', rfc)
      }, 1000)
    },
    editItem (item) {
      item.loading = true

      setTimeout(() => {
        item.loading = false
      }, 1000)
    },
    addItem () {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.showForm = true
      }, 1000)
    },
    mounted () {
      this.$store.dispatch('allClients')
    }
  }

}
</script>

<style>
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
