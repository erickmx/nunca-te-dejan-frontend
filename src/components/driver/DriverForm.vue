<template>
  <v-form v-model="valid">
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
  </v-form>

  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent>
      <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>

</template>

<script>
export default {
  data () {
      return {
        valid: false,
        name: '',
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        dialog: false
      }
    }
}
</script>

<style>

</style>
