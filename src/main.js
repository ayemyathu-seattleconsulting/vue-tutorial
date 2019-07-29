import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCwrb1VRA0Pk6gj-6TEAmWTKeSb9sGexBQ",
  authDomain: "vue-tutorial-82ba1.firebaseapp.com",
  databaseURL: "https://vue-tutorial-82ba1.firebaseio.com",
  projectId: "vue-tutorial-82ba1",
  storageBucket: "",
  messagingSenderId: "731700177275",
  appId: "1:731700177275:web:aaf08751225a3721"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')