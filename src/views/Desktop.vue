<template>
  <div>
    <header-app></header-app>
    <div class="mt-5 mb-3 text-xs-center">
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <v-layout row mb-5>
              <v-flex xs12>
                <span subheading>To send messages in our app, you have the follow alternatives:</span>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 mt-3 v-for="wallet in wallets" :key="wallet.name">
                <v-card>
                  <v-img :src="wallet.image" height="200"></v-img>
                  <v-card-title primary-title>
                    <template>
                      <v-layout row wrap>
                        <v-flex xs12>
                          <h3 class="headline mb-0">{{ wallet.name }}</h3>
                          <span>{{ wallet.description }}</span>
                        </v-flex>
                        <v-flex xs12>
                          <v-btn @click="goTo(wallet.link)" color="grey darken-1" class="white--text">
                            <v-icon left>cloud_download</v-icon>
                            Download
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </template>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <footer-app></footer-app>
  </div>
</template>

<script>
import HeaderApp from '@/components/Header'
import FooterApp from '@/components/Footer'

export default {
  name: 'Desktop',
  components: {
    HeaderApp,
    FooterApp
  },
  data: () => ({
    wallets: [{
      name: 'Metamask for Chrome',
      description: 'This Chrome extension lets you to create a new Ethereum Wallet in your Google Chrome browser.',
      link: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
      image: '/static/images/metamask-chrome-card.png'
    },
    {
      name: 'Brave Browser',
      description: 'This browser has Metamask included by default. Brave improves your browser experience blocking content and script undesirables. Brave belongs to Basic Attention Token (BAT) project.',
      link: 'https://brave.com/download/',
      image: '/static/images/lionbot.png'
    }]
  }),
  methods: {
    goTo: (link) => {
      window.open(link, '_blank')
    }
  }
}
</script>
