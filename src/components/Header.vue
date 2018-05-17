<template>
  <v-toolbar color="grey darken-1" dark app height="auto">
    <v-layout wrap row>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <div class="title ma-2 pt-2">
          <span class="is-white" >Libro de Visitas con Vue.JS en la Blockchain</span>
        </div>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-menu>
          <v-btn slot="activator" flat>
            <strong>Links útiles</strong>
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile-content>
            <v-list-tile v-for="item in items" :key="item" @click="evento()">
              <v-list-tile-title v-text="item"></v-list-tile-title>
            </v-list-tile>
            </v-list-tile-content>
          </v-list>
        </v-menu>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>

<script>
export default {
  name: 'header-app',
  data () {
    return {
      items: [
        'Desde un Desktop', 'Desde un Mobile', 'Faucets de Ether', 'Me brindas un Café?'
      ]
    }
  },
  methods: {
    evento () {
      console.log('soy un evento')
    }
  }
}
</script>
