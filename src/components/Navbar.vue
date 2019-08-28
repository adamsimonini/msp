<template>
  <div>
    <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/" class="app-title">
        <h1 class="title ml-3 mr-5">{{ $t("message.homepage") }}&nbsp;<span class="font-weight-light"></span></h1>
      </router-link>
      <!-- <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field> -->
      <v-spacer></v-spacer>
      <span class="mr-2 top-right">
        <div id="switch-language" @click="changeLanguage">
          <span>{{  this.toLocale }} </span>
        </div>
        <div>
          {{ this.$store.state.username ? (`${$t("message.welcome")} ${this.$store.state.username}`) : ""}} 
        </div>
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
      <!-- THe navigation show to not-logged in users -->
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
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-4"
          ></v-divider>
          <v-list-item v-else :key="i" >
            <router-link :to=item.route class="v-list-item v-list-item--link theme--light">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="grey--text">
                 {{ $t(`message.${item.text}`) }}
                </v-list-item-title>
              </v-list-item-content>
            </router-link>
          </v-list-item>
          </div>
        </template>
        <!-- THe navigation show to logged in users -->
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
              @click="item.function"
            >
              <router-link :to=item.route class="v-list-item v-list-item--link theme--light">
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="grey--text">
                    {{ $t(`message.${item.text}`) }}
                  </v-list-item-title> 
                </v-list-item-content>
              </router-link>
            </v-list-item>
          </div>
        </template>
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
    let a = this.$i18n.locale;
    return {
      toLocale: "Française",
      drawer: null,
      unloggedNav: [
        { icon: 'lightbulb_outline', text: 'login', route: '/login', function: this.empty},
        { icon: 'touch_app', text: 'register', route: '/register', function: this.empty},
        // { icon: 'call_split', text: 'Easter Egg', route: '/ponies', function: this.empty},
      ],
      loggedNav: [
        { heading: 'Labels' },
        { icon: 'add', text: 'addTask', route: '/tasks/new', function: this.empty},
        { divider: true },
        { icon: 'archive', text: 'archive', route: '/register', function: this.empty},
        { icon: 'delete', text: 'trash', route: '/register', function: this.empty},
        { icon: 'keyboard', text: 'keyboardShotcuts', route: '/register', function: this.empty},
        { icon: 'settings', text: 'settings', route: '/register', function: this.empty},
        { divider: true },
        { icon: 'lightbulb_outline', text: 'logout', route: '/', function: this.logout},
      ],
    };
  },
  methods: {
    logout() {
      auth.logout();
      this.$router.push({ name: 'home'});
    },
    changeLanguage() {
      if (this.$i18n.locale == 'en' ) {
        this.$i18n.locale = 'fr';
        this.locale = 'English';
        this.$vuetify.lang.current = 'fr';
      } else {
        this.$i18n.locale = 'en';
        this.locale = 'Française';
        this.$vuetify.lang.current = 'en';
      }
    },
    empty() {
      return false;
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
};

</script>

<style lang="scss" scroped>
.app-title {
  text-decoration: none;
  color: black !important;
}
.top-right {
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin: 0 10px
  }
}
#switch-language {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 12px;
  padding: 0 16px;
  min-height: 48px;
    &:hover {
      background-color: rgba(220,220,220,0.5);
      cursor: pointer;
    }
    span {
      font-size: 1rem;
      user-select: none;
    }
}
</style>