<template>
  <div>
    <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/" class="app-title">
        <span class="title ml-3 mr-5">MSP&nbsp;<span class="font-weight-light">Program</span></span>
      </router-link>
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
        <template v-for="(item, i) in unloggedNav">
          <div v-if="!$store.state.isLoggedIn" :key=i >
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
            <router-link :to=item.route class="v-list-item v-list-item--link theme--light">
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
          </div>
        </template>
        <template v-for="(item, i) in loggedNav">
          <div v-if="$store.state.isLoggedIn" :key=i >
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
            <router-link :to=item.route class="v-list-item v-list-item--link theme--light">
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
          </div>
        </template>
        <a v-if="$store.state.isLoggedIn" v-on:click.prevent="logout()" to="/#" class="v-list-item v-list-item--link theme--light" exact>
          LOGOUT
        </a>
      </v-list>
    </v-navigation-drawer>
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
      unloggedNav: [
        { icon: 'lightbulb_outline', text: 'Login', route: '/login'},
        { icon: 'touch_app', text: 'Register', route: '/register'},
      ],
      loggedNav: [
        { heading: 'Labels' },
        { icon: 'add', text: 'Add task', route: '/tasks/new'},
        { divider: true },
        { icon: 'archive', text: 'Archive', route: '/register'},
        { icon: 'delete', text: 'Trash', route: '/register'},
        { divider: true },
        { icon: 'settings', text: 'Settings', route: '/register'},
        { icon: 'chat_bubble', text: 'Trash', route: '/register'},
        { icon: 'help', text: 'Help' },
        { icon: 'keyboard', text: 'Keyboard shortcuts', route: '/register'},
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

<style scroped>
.app-title {
  text-decoration: none;
  color: black !important;
}
</style>