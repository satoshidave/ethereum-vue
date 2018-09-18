<template>
  <div>
    <header-app></header-app>
    <div class="mt-5 mb-3 text-xs-center">
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <span subheading>To send messages in our application from your mobile device, you have many alternatives, but we select the following ones because they allow you to switch between Mainnet to Testnet (Rinkeby, Ropsten ...) and vice versa:</span>
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
      </v-container>
    </div>
    <footer-app></footer-app>
  </div>
</template>

<script>
import HeaderApp from '@/components/Header'
import FooterApp from '@/components/Footer'

export default {
  name: 'Mobile',
  components: {
    HeaderApp,
    FooterApp
  },
  data: () => ({
    wallets: [{
      name: 'Cipher Browser',
      description: ' Cipher allows you to interact with dapps powered by Ethereum on your mobile device and makes it easy for you to securely store, send and receive Ether and ERC20 tokens.',
      link: 'https://www.cipherbrowser.com/',
      image: '/static/images/cypher-card-header.jpg'
    },
    {
      name: 'Trust Wallet',
      description: `Trust Wallet is a secure wallet for Ethereum, ERC20 and ERC223 tokens. Trust allows you to interact with decentralized applications (DApp) directly from the app. Trust Wallet is Binance's Official Wallet.`,
      link: 'https://trustwalletapp.com/',
      image: '/static/images/trust-card-header.jpg'
    }]
  }),
  methods: {
    goTo: (link) => {
      window.open(link, '_blank')
    }
  }
}
</script>
