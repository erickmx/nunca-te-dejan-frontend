<template>

  <v-layout row justify-center>
    <v-dialog v-model="dialog" width="80%" persistent>
      <!-- <v-btn color="primary" dark slot="activator">Open Dialog</v-btn> -->
      <v-card>
        <v-card-title class="headline">Nuevo Chofer</v-card-title>
        <v-card-text>Ingrese los datos del nuevo chofer</v-card-text>

        <v-form v-model="valid">
          <v-text-field
            label="Name"
            v-model="name"
            :rules="nameRules"
            :counter="20"
            required
          ></v-text-field>
          <v-text-field
            label="PhoneNumber"
            v-model="phoneNumber"
            :rules="phoneNumberRules"
            required
          ></v-text-field>
          <v-text-field
            label="Status"
            v-model="status"
            :rules="statusRules"
            required
          ></v-text-field>
          <!-- <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field> -->
        </v-form>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" flat @click.native="cancel"><v-icon>block</v-icon> Cancelar</v-btn>
          <v-btn color="green darken-1" :disabled="!valid" flat @click.native="save"><v-icon>check</v-icon> Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>

</template>

<script>
export default {
  name: 'driver-form',
  props: ['dialog'],
  data () {
    return {
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters'
      ],
      phoneNumber: '',
      phoneNumberRules: [
        v => !!v || 'PhoneNumber is required',
        v => v.length > 7 || 'phoneNumber must be more than 7 digits',
        v => /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/.test(v) || 'PhoneNumber invalid'
      ],
      status: 'activo',
      statusRules: [
        v => !!v || 'Status is required',
        v => /[a-zA-Z]+/.test(v) || 'Status must not be number'
      ]
      // email: '',
      // emailRules: [
      //   v => !!v || 'E-mail is required',
      //   // v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      //   v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      // ],
      // dialog: false
    }// end return
  }, // end data
  methods: {
    save () {
      const newDriver = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        status: this.status
      }

      // this.$store.dispatch('addDriver', newDriver)
      this.$store.commit('addDriver', newDriver)
      // this.dialog = false
      this.$emit('update:dialog', false)
    },
    cancel () {
      // this.dialog = false
      this.$emit('update:dialog', false)
    }
  }

}
</script>

<style>

</style>
