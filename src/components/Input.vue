<template>
  <div class="text-xs-center mt-3 mb-3">
    <v-container fluid>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6>
          <v-text-field v-model="mensaje" label="Ingrese su mensaje..." placeholder="Tenga en cuenta que quedará guardado permanentemente en la Blockchain.">
          </v-text-field>
          <v-btn color="grey darken-1" class="white--text" @click="escribir()" dark>
            <v-icon>send</v-icon>
            <strong>&nbsp;Enviar</strong>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar :color="msgSnackbarColor" :timeout="timeout" top vertical v-model="msgError" >
      <strong>{{msgSnackbar}}</strong>
      <v-btn flat color="white" @click.native="msgError = false">Cerrar</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import web3 from '@/web3'

export default {
  name: 'input-app',
  data () {
    return {
      mensaje: '',
      msgError: false,
      timeout: 6000,
      msgSnackbar: 'Error desconocido. Por favor contacte con el desarrollador. Gracias.',
      msgSnackbarColor: 'red',
      sendPushed: ''
    }
  },
  methods: {
    async escribir () {
      if (this.mensaje.length > 0) {
        let creador = await web3.eth.getAccounts()
        this.$store.dispatch('WRITE_MESSAGE', {sender: creador[0], message: this.mensaje})
        this.msgSnackbar = 'Su mensaje fué enviado. Espere mientras el bloque es minado y aparece su mensaje.'
        this.msgSnackbarColor = 'green'
        this.msgError = true
        this.mensaje = null
      } else {
        this.msgSnackbar = 'No puede enviar un mensaje vacío. Por favor escriba un mensaje.'
        this.msgSnackbarColor = 'red'
        this.msgError = true
      }
    }
  }
}
</script>
