import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase'

import App from './App.vue'
import router from './router'
Vue.use(BootstrapVue);


const firebaseConfig = {
  apiKey: "AIzaSyA3o5UL5TFEVqbAqX912ntJahznIqZK6Jo",
  authDomain: "madama138.firebaseapp.com",
  databaseURL: "https://madama138-default-rtdb.firebaseio.com",
  projectId: "madama138",
  storageBucket: "madama138.appspot.com",
  messagingSenderId: "963846846243",
  appId: "1:963846846243:web:03437be760909526677e96"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db


//////////////////////////////////////////////////////////////////











/////////////////////////////////////////////////////////////////////////

Vue.use(VueCompositionAPI)

const app = createApp({
  router,
  render: () => h(App)
})

app.mount('#app')
