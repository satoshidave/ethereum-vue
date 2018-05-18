<template>
  <v-footer height="auto bottom">
    <v-card flat tile class="flex">
      <v-card-title class="teal white--text">
        <strong class="subheading">Más contenido en mis Redes Sociales!</strong>
        <v-spacer></v-spacer>
        <v-btn v-for="(icon, index) in icons" :key="index" icon class="mx-3">
          <v-icon dark >{{icon}}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'footer-app',
  data () {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-instagram',
        'fab fa-github'
      ],
      mobile: null
    }
  }
}
</script>
