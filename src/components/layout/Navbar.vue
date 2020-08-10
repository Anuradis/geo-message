<template>
  <div class="navbar">
    <nav class="blue darken-1">
      <div class="container">
        <router-link class="brand-logo left" :to="{ name: 'GMap' }"
          >Geomessage</router-link
        >
        <ul class="right">
          <li>
            <router-link v-if="!this.user" :to="{ name: 'SignUp' }"
              >Signup</router-link
            >
          </li>
          <li>
            <router-link v-if="!this.user" :to="{ name: 'Login' }"
              >Login</router-link
            >
          </li>
          <li>
            <a v-if="this.user"> {{ this.user.email }}</a>
          </li>
          <li>
            <a v-if="this.user" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Navbar",
  data() {
    return {
      user: null
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>

<style></style>
