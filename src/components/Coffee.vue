<template>
  <div  class="mt-5 mb-3">
    <v-container fluid>
      <v-layout row wrap justify-center mt-5>
        <v-flex xs12 class="text-xs-center">
          <span class="subheading">"The coffee is the elixir of the developer
            <v-icon>local_cafe</v-icon>"
          </span>
        </v-flex>
        <v-flex xs12 sm6 lg3 pa-3 v-for="wallet in wallets" :key="wallet.name">
          <v-card color="white" height="100%">
            <v-card-media :src="wallet.imgHeader" height="150px">
            </v-card-media>
            <v-card-title primary-title>
              <template>
                <v-layout row wrap class="text-xs-center">
                  <v-flex class="xs12 mb-2">
                    <h3 class="headline mb-0">{{wallet.name}}</h3>
                    <span>{{wallet.note}}</span>
                  </v-flex>
                  <v-flex class="xs12">
                    <qr-code style="text-align: -webkit-center;" :text="wallet.address"></qr-code>
                  </v-flex>
                  <v-flex class="xs12 mt-2">
                    {{wallet.address}}<br />
                    <v-btn
                      :id="wallet.name"
                      color="grey darken-1"
                      class="white--text"
                      v-clipboard="wallet.address"
                      @success="handleSuccess(wallet.name, wallet.address)"
                      @error="handleErrror()">
                      Copiar
                      <v-icon right dark>file_copy</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </template>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar
      :timeout="6000"
      top
      vertical
      v-model="copyState"
      :color="copyColor"
    >
      {{copyStatus}}<br />
      {{copyMsg}}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'cofee',
  data () {
    return {
      copyState: false,
      copyMsg: 'Unknown Error',
      copyStatus: 'Copy Error',
      copyColor: 'red',
      wallets: [
        {
          name: 'Bitcoin',
          address: '3LkPX7Tcy4FYvYkXE6Hjf2v4xGBjLduVtA',
          imgHeader: '/static/images/bitcoin-card-header.jpg',
          note: 'The father'
        },
        {
          name: 'Ethereum',
          address: '0xDb6C6dC2A8bA7D5B9D5DEf6ef2E519D38Da6E868',
          imgHeader: '/static/images/ethereum-card-header.jpg',
          note: 'Tokens also are welcome!'
        },
        {
          name: 'Litecoin',
          address: 'MBP9uAu2Qi3mQQELXL2KofRvZTxVPfkcZr',
          imgHeader: '/static/images/litecoin-card-header.jpg',
          note: 'Silver'
        },
        {
          name: 'Dogecoin',
          address: 'DCcbLeF1srfU1LptZAKGbMfLVTUacyHq98',
          imgHeader: '/static/images/dogecoin-card-header.jpg',
          note: 'We love dogs <3'
        }
      ]
    }
  },
  methods: {
    handleSuccess (name, address) {
      this.copyState = true
      this.copyStatus = `${name} address copied`
      this.copyMsg = address
      this.copyColor = 'green'
    },
    handleError () {
      this.copyState = true
      this.copyStatus = `Error to copy address`
      this.copyMsg = ''
      this.copyColor = 'red'
    }
  }
}
</script>
