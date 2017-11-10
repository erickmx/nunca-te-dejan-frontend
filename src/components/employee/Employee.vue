<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">

        <v-card>
          <v-card-title>
            Empleados
            <v-spacer></v-spacer>

            <v-btn
              outline
              color="success"
              :loading="loading"
              @click.native="props.item.options.edit"
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
              <td class="text-xs-right">{{ props.item.area }}</td>
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
                  :loading="loading"
                  @click.native="props.item.options.edit"
                  :disabled="loading"
                >
                  <v-icon>edit</v-icon>
                  <span slot="loader" class="custom-loader">
                    <v-icon light>cached</v-icon>
                  </span>
                </v-btn>
                <v-btn
                  outline
                  color="error"
                  :loading="loading"
                  @click.native="props.item.options.delete"
                  :disabled="loading"
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
export default {

  name: 'employee',
  components: {
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
        { text: 'Area', value: 'area' },
        { text: 'Estatus', value: 'status' },
        { text: 'Opciones', value: 'options' }
      ],
      loading: false
    } // end-return
  }, // end-data
  computed: {
    items () {
      const items = this.$store.getters.allEmployees
      return items.map(item => {
        return {
          value: false,
          options: {
            'edit': event => {
              this.loading = true
              const l = this.loading
              this[l] = !this[l]

              setTimeout(() => {
                this[l] = false
                this.loading = false
              }, 3000)

              // this.loading = null
            },
            'delete': event => {
              this.loading = true
              const l = this.loading
              this[l] = !this[l]

              setTimeout(() => {
                this[l] = false
                this.loading = false
              }, 3000)
            }
          },
          ...item
        }
      })
    }
  },
  watch: {
    loader () {
      const l = this.loading
      this[l] = !this[l]

      setTimeout(() => {
        this[l] = false
      }, 3000)

      this.loading = null
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
