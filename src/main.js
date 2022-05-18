import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore' 

import App from './App.vue'
import router from './router'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3o5UL5TFEVqbAqX912ntJahznIqZK6Jo",
  authDomain: "madama138.firebaseapp.com",
  databaseURL: "https://madama138-default-rtdb.firebaseio.com",
  projectId: "madama138",
  storageBucket: "madama138.appspot.com",
  messagingSenderId: "963846846243",
  appId: "1:963846846243:web:03437be760909526677e96"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


Vue.use(VueCompositionAPI)

const app = createApp({
  router,
  render: () => h(App)
})

app.mount('#app')
