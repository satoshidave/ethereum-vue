<template>
  <div id="app">
    <header-app></header-app>
    <input-app></input-app>
    <hr />
    <div id="contenido">
      <div id="mensaje" v-for="(item, index) in getMessages" :key="index">
        Creador: {{item.emisor}} - Mensaje: {{item.mensaje}} - Fecha de publicación: {{item.fechaPublicacion}}
      </div>
    </div>
  </div>
</template>

<script>
import HeaderApp from '@/components/Header'
import InputApp from '@/components/Input'
import {mapGetters} from 'vuex'

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
  mounted () {
    this.$store.dispatch('LOAD_MESSAGES')
  },
  computed: mapGetters({
    getMessages: ['getMessages']
  })
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
