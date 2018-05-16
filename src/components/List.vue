<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2 mb-3 pl-1 pr-1>
      <v-card color="white">
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="grey darken-1" class="white--text mb-3 pa-3 elevation-5" v-for="(item, index) in messages" :key="index">
                <div><b>Creador: </b>{{item.emisor}}</div>
                <div class="headline">{{item.mensaje}}</div>
                <div><b>Fecha de publicación: {{messagesQty}} </b>{{item.fechaPublicacion}}</div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <div class="text-xs-center">
          <v-pagination :length="6" v-model="page">
          </v-pagination>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'list-app',
  data () {
    return {
      page: 1
    }
  },
  computed: mapGetters({
    messages: ['getMessages'],
    messagesQty: ['getMessagesQty']
  })
}
</script>
