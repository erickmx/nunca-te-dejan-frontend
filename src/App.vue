<template>
  <v-app dark>

    <!-- rgba(98, 150, 234,.7) -->
    <!-- #10a0a0 -->
    <!-- <loader color="rgba(16, 160, 160,.7)"></loader>
    <driver></driver> -->
    <!-- <router-view></router-view> -->
    <nav-bar></nav-bar>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>


  </v-app>
</template>

<script>
  import Driver from '@/components/driver/Driver'
  import Loader from '@/components/generic/Loader'
  import NavBar from '@/components/generic/NavBar'

  export default {
    components: {
      'driver': Driver,
      'loader': Loader,
      'nav-bar': NavBar
    },
    data () {
      return {
        fixed: false
      }
    }
  }

</script>
