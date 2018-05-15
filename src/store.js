import Vue from 'vue'
import Vuex from 'vuex'
import mensajes from '@/mensajes'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    valor: 1,
    messages: [],
    numeroMensajes: 0
  },
  actions: {
    async LOAD_MESSAGES ({commit}) {
      let nMessages = await mensajes.methods.contadorMensajes().call()
      let messages = []
      for (let i = 0; i < nMessages; i++) {
        messages.push(await mensajes.methods.mensajes(i).call())
      }
      commit('SET_MESSAGE', {messages: messages})
    },
    FIRST_ACTION ({commit}) {
      commit('FIRST_MUTATION')
    },
    async WRITE_MESSAGE ({commit}, payload) {
      console.log(payload)
      await mensajes.methods.escribirMensaje(payload.message).send({
        from: payload.sender
      }).then(async () => {
        let nMessages = await mensajes.methods.contadorMensajes().call()
        let messages = []
        for (let i = 0; i < nMessages; i++) {
          messages.push(await mensajes.methods.mensajes(i).call())
        }
        commit('SET_MESSAGE', {messages: messages})
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mutations: {
    FIRST_MUTATION (state) {
      state.valor = 2
    },
    async SET_MESSAGE (state, {messages}) {
      state.messages = messages
    }
  },
  getters: {
    getValor (state) {
      return state.valor
    },
    getMessages (state) {
      return state.messages
    }
  }
})

export default store
