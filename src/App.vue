<template>
  <div id="app">
    <div id="header">
      <h1>Libro de visitas</h1>
      Tu mensaje: <input type="text" v-model="mensaje" placeholder="Inserte su mensaje..." />
      <button @click="escribir()" >Escribir</button>
    </div>
    <hr />
    <div id="contenido">
      <div id="mensaje" v-for="(item, index) in mensajes" :key="index">
        Creador: {{item.emisor}} - Mensaje: {{item.mensaje}} - Fecha de publicación: {{item.fechaPublicacion}}
      </div>
    </div>
  </div>
</template>

<script>
import web3 from './web3'
import mensajes from './mensajes'

export default {
  name: 'App',
  data () {
    return {
      numeroMensajes: 0,
      mensaje: '',
      mensajes: []
    }
  },
  async mounted () {
    this.getMensajes()
  },
  methods: {
    async escribir () {
      let creador = await web3.eth.getAccounts()
      let _this = this
      console.log(creador)
      await mensajes.methods.escribirMensaje(this.mensaje).send({
        from: creador[0]
      }).then(function () {
        _this.mensajes = []
        _this.getMensajes()
      }).catch(function (error) {
        console.log(error)
      })
    },
    async getMensajes () {
      this.numeroMensajes = await mensajes.methods.contadorMensajes().call()
      console.log(this.numeroMensajes)
      for (let i = 0; i < this.numeroMensajes; i++) {
        this.mensajes.push(await mensajes.methods.mensajes(i).call())
      }
      console.log(this.mensajes)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
