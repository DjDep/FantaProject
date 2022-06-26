import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vSelect from 'vue-select'
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase'

import App from './App.vue'
import router from './router'
Vue.use(BootstrapVue);


/*const firebaseConfig = {
  apiKey: "AIzaSyBRveIImqHR6dmCzOaKjAW_pSdXicCBVc8",
  authDomain: "fantaproject-adc14.firebaseapp.com",
  projectId: "fantaproject-adc14",
  storageBucket: "fantaproject-adc14.appspot.com",
  messagingSenderId: "1079995820416",
  appId: "1:1079995820416:web:2b2937478238d21dacf965"
};*/

const firebaseConfig = {
  apiKey: "AIzaSyBGeRyBjE4PxkdH0wYhBYZc1tXZDdYZvlw",
  authDomain: "fantaproject2-258ab.firebaseapp.com",
  projectId: "fantaproject2-258ab",
  storageBucket: "fantaproject2-258ab.appspot.com",
  messagingSenderId: "1087411349932",
  appId: "1:1087411349932:web:ed1b84c7bf2de58099b209"
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
Vue.component('v-select', vSelect)
app.mount('#app')
