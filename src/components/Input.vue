<template>
  <div class="text-xs-center mt-5 mb-3">
    <v-container fluid>
      <v-layout row wrap justify-center mt-5 >
        <v-flex xs12 sm6>
          <v-text-field v-model="mensaje" label="Ingrese su mensaje..." placeholder="Tenga en cuenta que quedará guardado permanentemente en la Blockchain.">
          </v-text-field>
          <v-btn inherit color="grey darken-1" class="white--text" @click="escribir()" dark>
            <v-icon>send</v-icon>
            <strong>&nbsp;Enviar</strong>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar :timeout="60000" auto-height :color="msgSnackbarColor" top vertical v-model="msgError" >
      <div><strong>{{msgSnackbar}}</strong></div>
      <div v-if="hasTxHash" ><strong>ID de la Transacción: </strong>{{TxHash}}</div>
      <v-card-actions>
        <v-btn v-if="hasTxHash" flat color="white" :href="watchTxHash(TxHash)" target="_blank" >Ver Status</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat color="white" @click.native="msgError = false">Cerrar</v-btn>
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
      msgSnackbar: 'Error desconocido. Por favor contacte con el desarrollador. Gracias.',
      msgSnackbarColor: 'error',
      TxHash: null,
      hasTxHash: false
    }
  },
  watch: {
    getTxHash: function () {
      this.TxHash = this.getTxHash
      this.msgSnackbar = 'Su mensaje fué enviado. Espere mientras el bloque es minado y aparece su mensaje.'
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
        this.msgSnackbar = 'No puede enviar un mensaje vacío. Por favor escriba un mensaje.'
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
