<template>
  <div>
    <header-app></header-app>
    <v-container mt-5 mb-3 class="text-xs-center">
      <h3>Soon</h3>
    </v-container>
    <footer-app></footer-app>
  </div>
</template>

<script>
import HeaderApp from '@/components/Header'
import FooterApp from '@/components/Footer'

export default {
  name: 'Faucet',
  components: {
    HeaderApp,
    FooterApp
  }
}
</script>
