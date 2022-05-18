import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore' 

import App from './App.vue'
import router from './router'


Vue.use(VueCompositionAPI)

const app = createApp({
  router,
  render: () => h(App)
})

app.mount('#app')
