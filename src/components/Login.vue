<template>

  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">

        <v-layout row justify-center>
          <v-card flat>
            <v-card-title class="headline">Login</v-card-title>
            <v-card-text>Login</v-card-text>

              <v-form v-model="valid">
                <v-text-field
                  label="Name"
                  v-model="name"
                  :rules="nameRules"
                  :counter="20"
                  required
                ></v-text-field>
                <v-text-field
                  label="RFC"
                  v-model="rfc"
                  :rules="rfcRules"
                  required
                ></v-text-field>
                <!-- <v-btn @click.native="submit">submit</v-btn>
                <v-btn @click.native="clear">clear</v-btn> -->
              </v-form>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="red darken-1" flat @click.native="clear"><v-icon>block</v-icon> Clear</v-btn>
              <v-btn color="green darken-1" :disabled="!valid" flat @click.native="submit"><v-icon>check</v-icon> Submit</v-btn>
            </v-card-actions>
          </v-card>

        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters'
      ],
      rfc: '',
      rfcRules: [
        v => !!v || 'RFC is required',
        v => v.length <= 13 || 'RFc must be less than 13 characters'
      ]
    }
  },
  methods: {
    submit () {
      // this.$v.$touch()
      this.$router.push('/driver')
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.rfc = ''
    }
  }

}
</script>

<style>

</style>
