<template>
  <div class="navbar">
    <nav class="blue darken-1">
      <div class="container">
        <router-link :to="{name : 'GMap'}" class="brand-logo left" >Geo-Msg!</router-link>
        <ul class="right">
          <li> <router-link :to="{name : 'SignUp'}">Signup</router-link></li>
          <li><a href="">Login</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return{
    }
  }
}
</script>

<style>
</style>