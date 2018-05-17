<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2 mb-5 pl-1 pr-1>
      <v-card color="white">
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card v-show="index > lowerItems && index <= upperItems" color="grey darken-1" class="white--text mb-3 pa-3 elevation-5" v-for="(item, index) in messages" :key="index">
                <div><b>Creador: </b>{{item.emisor}}</div>
                <div class="headline">{{item.mensaje}}</div>
                <div><b>Fecha de publicación: </b>{{formatBlocktimestamp(item.fechaPublicacion)}}</div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <div class="text-xs-center pb-3">
          <v-pagination color="grey darken-1 white--text" :length="messagesQty / 5 > Math.round(messagesQty / 5) ? Math.round(messagesQty / 5) + 1 : Math.round(messagesQty / 5)" v-model="page" @click="loadPage()">
          </v-pagination>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapGetters} from 'vuex'
import moment from 'moment'

export default {
  name: 'list-app',
  data () {
    return {
      page: 1,
      lowerItems: -1,
      upperItems: 4
    }
  },
  watch: {
    page: function () {
      this.upperItems = (this.page * 5) - 1
      this.lowerItems = this.upperItems - 5
    }
  },
  methods: {
    formatBlocktimestamp (blocktimestamp) {
      return moment(blocktimestamp, 'X').format('DD/MM/YYYY HH:mm')
    }
  },
  computed: mapGetters({
    messages: ['getMessages'],
    messagesQty: ['getMessagesQty']
  })
}
</script>
