<template>
  <v-toolbar color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <router-link to="/" class="nav-link" exact>
      <v-toolbar-title class="white--text">MY<b>LITTLE</b>PONIES</v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <router-link v-if="$store.state.isLoggedIn" to="/tasks" class="nav-link" exact>
      Tasks
    </router-link>
    <router-link v-if="!$store.state.isLoggedIn" to="/login" class="nav-link" exact>
      Login
    </router-link>
    <a v-if="$store.state.isLoggedIn" v-on:click.prevent="logout()" to="/#" class="nav-link" exact>
      Logout
    </a>
    <router-link v-if="!$store.state.isLoggedIn" to="/register" class="nav-link" exact>
      Register
    </router-link>
    <router-link to="/ponies" class="nav-link" exact>
      Ponies
    </router-link>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
    <v-btn
        flat
        href="https://mylittlepony.hasbro.com/en-ca"
        target="_blank"
      >
      <span class="mr-2"> 
        {{ this.$store.state.username ? (this.$store.state.username + "'s") : "More"}} 
        Ponies</span>
      </v-btn>
  </v-toolbar>
</template>

<script>

import * as auth from '../services/AuthService';

export default {
  name: 'Navbar',
  methods: {
    logout() {
      auth.logout();
      this.$router.push({ name: 'home'});
    },
  },
};

</script>