<template>
  <v-app dark>

    <!-- rgba(98, 150, 234,.7) -->
    <!-- #10a0a0 -->
    <!-- <loader color="rgba(16, 160, 160,.7)"></loader>
    <driver></driver> -->
    <!-- <router-view></router-view> -->
    <nav-bar></nav-bar>

    <main>
      <router-view></router-view>
      <!-- <router-view></router-view> -->
      <!-- <router-link :to="{ name: '', params: {} }"></router-link> -->
      <!-- <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-tooltip right>
              <v-btn icon large :href="source" target="_blank" slot="activator">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-layout>
        </v-container>
      </v-content> -->
    </main>

    <v-footer app fixed>
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

      }
    },
    props: {
      source: String
    }
  }

</script>
