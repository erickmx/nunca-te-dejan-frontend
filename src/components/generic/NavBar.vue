<template>

  <div>

    <v-navigation-drawer
      dark
      clipped
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
      class="hidden-md-and-up"
    >
      <v-list dense dark>

        <v-list-tile
          v-for="menuOption in menuOptions"
          :key="menuOption.name"
          @click="menuOption.action"
          :to="menuOption.link"
        >
          <v-list-tile-action>
            <v-icon> {{menuOption.icons}} </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title> {{menuOption.name}} </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left color="primary" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Nunca te dejan</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="menuOption in menuOptions"
          :key="menuOption.name"
          @click="menuOption.action"
          :to="menuOption.link"
        >
          <v-icon> {{menuOption.icons}} </v-icon>
          {{menuOption.name}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

  </div>

</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      menuOptions: [
        { name: 'Clientes', icons: 'account_circle', action: this.sayHello, link: '/client' },
        { name: 'Choferes', icons: 'account_box', action: this.sayHello, link: '/driver' },
        { name: 'Empleado', icons: 'account_box', action: this.sayHello, link: '/employee' },
        { name: 'Productos', icons: 'settings', action: this.sayHello, link: '/insumo' },
        { name: 'Rentas', icons: 'settings', action: this.sayHello, link: '/rent' },
        { name: 'Vehiculos', icons: 'car', action: this.sayHello, link: '/vehicle' }
      ]
    }
  },
  props: {
    source: String
  },
  methods: {
    sayHello () {
      console.log('Hola')
      // let driver = this.$store.getters.getDriver('fulano2')
      //
      // console.log(driver)
      //
      // this.$store.commit('addDriver', {
      //   name: 'adsds',
      //   phoneNumber: 1323432231,
      //   status: 'baja'
      // })
      //
      // this.$store.commit('driverStatus', {
      //   name: driver.name,
      //   status: 'bajado'
      // })
      //
      // driver = this.$store.getters.getDriver('fulano2')
      // console.log(driver)
      //
      // this.$store.commit('modifyDriver', {
      //   oldName: driver.name,
      //   name: 'fulanillo',
      //   phoneNumber: 2367263,
      //   status: 'loco'
      // })
      //
      // driver = this.$store.getters.getDriver('fulanillo')
      //
      // console.log(driver)
      //
      // this.$store.commit('removeDriver', {
      //   name: 'fulanillo'
      // })
      //
      // console.log(this.$store.getters.allDrivers)
    }
  }
}
</script>

<style>

</style>
