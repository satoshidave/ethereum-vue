<template>
  <div id="app">
    <header-app></header-app>
    <input-app></input-app>
    <list-app></list-app>
    <footer-app></footer-app>
  </div>
</template>

<script>
import HeaderApp from '@/components/Header'
import InputApp from '@/components/Input'
import ListApp from '@/components/List'
import FooterApp from '@/components/Footer'

export default {
  name: 'App',
  components: {
    HeaderApp,
    InputApp,
    ListApp,
    FooterApp
  },
  mounted () {
    this.$store.dispatch('LOAD_MESSAGES')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f6f5f6;
  height: 100vh !important;
}
</style>
