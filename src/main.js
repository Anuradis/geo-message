import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

import "materialize-css";
import "materialize-css/dist/css/materialize.css";

Vue.config.productionTip = false;

let app = null;
// wait for firebase auth to init before creating the app
//Wrapping the Vue Instance so the user can stay logged in when page is refreshed
//but also app is created only once thanks to app flag

firebase.auth().onAuthStateChanged(() => {
  // init app if not already created
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
