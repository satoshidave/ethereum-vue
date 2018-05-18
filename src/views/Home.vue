<template>
  <div>
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
  name: 'home',
  components: {
    HeaderApp,
    InputApp,
    ListApp,
    FooterApp
  }
}
</script>
