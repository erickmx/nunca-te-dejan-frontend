<template>

  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">
        <img :src="src" alt="page not found" width="70%" height="70%">
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  data () {
    return {
      src: '/static/repair.png'
    }
  }
}
</script>

<style>

</style>
