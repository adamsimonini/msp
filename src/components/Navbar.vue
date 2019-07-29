<template>
  <div>
    <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">MSP&nbsp;<span class="font-weight-light">Program</span></span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
      <span class="mr-2"> 
        {{ this.$store.state.username ? (this.$store.state.username + "'s") : "More"}} 
        Ponies
      </span>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="grey lighten-4"
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex
              xs6
              class="text-right"
            >
              <v-btn
                small
                text
              >edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-4"
          ></v-divider>
          <v-list-item
            v-else
            :key="i"
            @click=""
          >
            <router-link v-if=item.show :to=item.route class="v-list-item v-list-item--link theme--light">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="grey--text">
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </template>
        <a v-if="$store.state.isLoggedIn" v-on:click.prevent="logout()" to="/#" class="v-list-item v-list-item--link theme--light" exact>
          LOGOUT
        </a>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-toolbar color="primary">
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
    </v-toolbar> -->
  </div>
</template>

<script>
import * as auth from '../services/AuthService';

export default {
  name: 'Navbar',
  props: {
    source: String,
  },
  data() {
    return {
      drawer: null,
      items: [
        { icon: 'lightbulb_outline', text: 'Login', route: '/login', show: !this.$store.state.isLoggedIn},
        { icon: 'touch_app', text: 'Register', route: '/register', show: !this.$store.state.isLoggedIn},
        { divider: true },
        { heading: 'Labels' },
        { icon: 'add', text: 'Add task', route: '/tasks/new', show: this.$store.state.isLoggedIn},
        { divider: true },
        { icon: 'archive', text: 'Archive', route: '/register', show: this.$store.state.isLoggedIn},
        { icon: 'delete', text: 'Trash', route: '/register', show: this.$store.state.isLoggedIn},
        { divider: true },
        { icon: 'settings', text: 'Settings', route: '/register', show: this.$store.state.isLoggedIn},
        { icon: 'chat_bubble', text: 'Trash', route: '/register', show: this.$store.state.isLoggedIn},
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads', route: '/register', show: this.$store.state.isLoggedIn},
        { icon: 'keyboard', text: 'Keyboard shortcuts', route: '/register', show: this.$store.state.isLoggedIn},
      ],
    };
  },
  methods: {
    logout() {
      auth.logout();
      this.$router.push({ name: 'home'});
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
};

</script>