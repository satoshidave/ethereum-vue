<template>
  <div>
    <v-toolbar color="grey darken-1 px-2" dark height="auto" absolute>
      <v-layout wrap row>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left">
          <div class="title ma-2 pt-2">
            <span class="is-white" >Ether-Vue Guestbook</span>
          </div>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
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
                  <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                </v-list-tile>
              </v-list-tile-content>
            </v-list>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
      <v-card>
        <v-toolbar card dark color="grey darken-1">
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Ether Rinkeby Faucet</v-toolbar-title>
        </v-toolbar>
        <iframe style="height:100%" src="https://faucet.rinkeby.io/"></iframe>
        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'header-app',
  data: () => ({
    dialog: false,
    items: [
      {
        name: 'Wallets for Desktop',
        icon: '',
        path: '/desktop'
      },
      {
        name: 'Wallets for Mobile',
        icon: '',
        path: '/mobile'
      },
      {
        name: 'Ether Faucet',
        icon: '',
        path: '/faucet'
      },
      {
        name: 'Give me a Coffee',
        icon: '',
        path: '/about'
      }
    ]
  }),
  methods: {
    evento (path) {
      if (path === '/faucet') {
        this.dialog = true
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
