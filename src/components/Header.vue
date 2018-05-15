<template>
  <v-toolbar color="grey darken-1" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-menu :nudge-width="100">
      <v-toolbar-title slot="activator">
        <span class="is-white" >Libro de Visitas</span>
        <v-icon dark>arrow_drop_down</v-icon>
      </v-toolbar-title>
      <v-list>
        <v-list-tile v-for="item in items" :key="item" @click="evento()">
          <v-list-tile-title v-text="item"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>favorite</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'header-app',
  data () {
    return {
      items: [
        'All', 'Family', 'Friends', 'Coworkers'
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
