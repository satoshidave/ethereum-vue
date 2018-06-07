<template>
  <div class="text-xs-center mt-5 mb-3">
    <v-container fluid>
      <v-layout row wrap justify-center mt-5 >
        <v-flex xs12 sm6>
          <v-text-field v-model="mensaje" label="Type your message..." placeholder="This will be saved in the Blockchain :-)...">
          </v-text-field>
          <v-btn inherit color="grey darken-1" class="white--text" @click="escribir()" dark>
            <v-icon>send</v-icon>
            <strong>&nbsp;Send</strong>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar :timeout="60000" auto-height :color="msgSnackbarColor" top vertical v-model="msgError" >
      <div><strong>{{msgSnackbar}}</strong></div>
      <div v-if="hasTxHash" ><strong>Transaction ID: </strong>{{TxHash}}</div>
      <v-card-actions>
        <v-btn v-if="hasTxHash" flat color="white" :href="watchTxHash(TxHash)" target="_blank" >See Status</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat color="white" @click.native="msgError = false">Close</v-btn>
      </v-card-actions>
    </v-snackbar>
  </div>
</template>

<script>
import web3 from '@/web3'
import { mapGetters } from 'vuex'

export default {
  name: 'input-app',
  data () {
    return {
      mensaje: '',
      msgError: false,
      msgSnackbar: 'Unknown error. Please, contact to developer about this. Gracias.',
      msgSnackbarColor: 'error',
      TxHash: null,
      hasTxHash: false
    }
  },
  watch: {
    getTxHash: function () {
      this.TxHash = this.getTxHash
      this.msgSnackbar = 'Your message was sent. Please wait while the block is mined and your message appears.'
      this.msgSnackbarColor = 'green'
      this.hasTxHash = true
      this.msgError = true
      this.mensaje = null
    }
  },
  methods: {
    async escribir () {
      if (this.mensaje.length > 0 && this.message !== null) {
        let creador = await web3.eth.getAccounts()
        this.$store.dispatch('WRITE_MESSAGE', {sender: creador[0], message: this.mensaje})
      } else {
        this.msgSnackbar = 'You cant send void message. Please write a menssage.'
        this.msgSnackbarColor = 'red'
        this.hasTxHash = false
        this.msgError = true
      }
    },
    watchTxHash (TxHash) {
      return `https://rinkeby.etherscan.io/tx/${TxHash}`
    }
  },
  computed: mapGetters({
    getTxHash: ['getTxHash']
  })
}
</script>
