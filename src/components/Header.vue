<template>
  <v-toolbar color="grey darken-1 px-2" dark height="auto" absolute>
    <v-layout wrap row>
      <v-flex xs12 sm5 offset-sm1 class="text-xs-center text-sm-left">
        <div class="title ma-2 pt-2">
          <span class="is-white" >Ethereum Guestbook</span>
        </div>
      </v-flex>
      <v-flex xs12 sm5 class="text-xs-center text-sm-right">
        <v-btn icon @click="goHome()" >
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-menu>
          <v-btn slot="activator" flat>
            <strong>Links</strong>
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile-content>
            <v-list-tile v-for="item in items" :key="item.name" @click="evento(item.path)">
              <v-list-tile-title v-text="item.name"></v-list-tile-title>
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
        {
          name: 'Ether Test Faucet',
          icon: '',
          path: 'http://rinkeby-faucet.com/'
        },
        {
          name: 'Give me a coffee',
          icon: '',
          path: '/about'
        }
      ]
    }
  },
  methods: {
    evento (path) {
      if (path === 'http://rinkeby-faucet.com/') {
        window.open(path, '_blank')
      } else {
        this.$router.push(path)
      }
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
