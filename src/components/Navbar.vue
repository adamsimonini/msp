<template>
  <v-toolbar color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <router-link to="/" class="nav-link">
      <v-toolbar-title class="white--text">MY<b>LITTLE</b>PONIES</v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <router-link to="/tasks" class="nav-link">
      Tasks
    </router-link>
    <router-link to="/login" class="nav-link">
      Login
    </router-link>
    <router-link to="/register" class="nav-link">
      Register
    </router-link>
    <router-link to="/ponies" class="nav-link">
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
      <span class="mr-2">More Ponies</span>
      </v-btn>
  </v-toolbar>
</template>

<script>
</script>