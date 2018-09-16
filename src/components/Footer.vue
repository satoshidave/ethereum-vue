<template>
  <v-footer height="auto bottom">
    <v-card flat tile class="flex">
      <v-card-title class="teal white--text">
        <strong class="subheading">More in my social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn v-for="(icon, index) in icons" :key="index" icon class="mx-3" @click="goTo(icon.link)" >
          <v-icon dark >{{icon.icon}}</v-icon>
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
        {name: 'Facebook', icon: 'fab fa-facebook', link: '#'},
        {name: 'Twitter', icon: 'fab fa-twitter', link: '#'},
        {name: 'Instagram', icon: 'fab fa-instagram', link: '#'},
        {name: 'Facebook', icon: 'fab fa-github', link: 'https://github.com/daveporras'}
      ],
      mobile: null
    }
  },
  methods: {
    goTo (url) {
      if (url !== '#') window.open(url, '_blank')
    }
  }
}
</script>
