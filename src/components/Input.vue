<template>
  <div class="text-xs-center mt-5 mb-5">
    <v-container fluid>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6>
          <v-text-field v-model="mensaje" label="Ingrese su mensaje..." placeholder="Tenga en cuenta que quedará guardado permanentemente en la Blockchain.">
          </v-text-field>
          <v-btn color="grey darken-1" class="white--text" @click="escribir()" dark>Enviar</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import web3 from '@/web3'

export default {
  name: 'input-app',
  data () {
    return {
      mensaje: '',
      msgError: false
    }
  },
  methods: {
    async escribir () {
      if (this.mensaje.length > 0) {
        let creador = await web3.eth.getAccounts()
        this.mensaje = null
        this.$store.dispatch('WRITE_MESSAGE', {sender: creador[0], message: this.mensaje})
      } else {
        this.msgError = true
      }
    }
  }
}
</script>
