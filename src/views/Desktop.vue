<template>
  <div>
    <header-app></header-app>
    <div class="mt-5 mb-3 text-xs-center">
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <span subheading>To send messages in our app, you have the follow alternatives:</span>
            <v-card>
              <v-img src="/static/images/metamask-chrome-card.png" height="200"></v-img>
              <v-card-title primary-title>
                <template>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <h3 class="headline mb-0">Metamask for Chrome</h3>
                      <span>This Chrome extension lets you to create a new Ethereum Wallet in your Google Chrome browser.</span>
                    </v-flex>
                    <v-flex xs12>
                      <v-btn color="grey darken-1" class="white--text">
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
  name: 'Desktop',
  components: {
    HeaderApp,
    FooterApp
  }
}
</script>
