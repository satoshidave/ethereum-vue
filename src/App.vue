<template>
  <div id="app">
    <header-app></header-app>
    <input-app></input-app>
    <hr />
    <div id="contenido">
      <div id="mensaje" v-for="(item, index) in mensajes" :key="index">
        Creador: {{item.emisor}} - Mensaje: {{item.mensaje}} - Fecha de publicación: {{item.fechaPublicacion}}
      </div>
    </div>
  </div>
</template>

<script>
import mensajes from './mensajes'
import HeaderApp from '@/components/Header'
import InputApp from '@/components/Input'

export default {
  name: 'App',
  components: {
    HeaderApp,
    InputApp
  },
  data () {
    return {
      numeroMensajes: 0,
      mensajes: []
    }
  },
  async mounted () {
    this.getMensajes()
  },
  methods: {
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
  background-color: #f6f5f6;
}
</style>
