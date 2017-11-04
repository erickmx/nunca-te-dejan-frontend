<template>
  <v-card>
    <v-card-title>
      Choferes
      <v-spacer></v-spacer>
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
        <td class="text-xs-right">{{ props.item.phone }}</td>
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
        <td class="text-xs-right">{{ props.item.options }}</td>
      </template>
      <template slot="pageText" scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>

export default {
  name: 'driver',
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
          text: 'Conductor',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Telefono', value: 'phone' },
        { text: 'Estatus', value: 'status' },
        { text: 'Opciones', value: 'options' }
      ],
      items: [
        {
          value: false,
          name: 'Erick',
          phone: 1234567890,
          status: 'activo',
          options: 'Editar  Eliminar'
        },
        {
          value: false,
          name: 'Ana',
          phone: 1243487478,
          status: 'servicio',
          options: 'Editar  Eliminar'
        }
      ]
    } // end-return
  } // end-data

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
