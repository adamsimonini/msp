<!-- Veutify grid system: https://vuetifyjs.com/en/framework/grid 
The system works as follows: v-container » v-layout » v-flex
A container should probably have only one layout, but each layout may contain multiple flex items
-->
<template>
  <v-app id="keep">
   <Navbar />
    <v-content>
      <v-container
        fluid
        fill-height
        class="grey lighten-4"
      >
        <v-layout
          justify-center
          align-center
        >
        <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
import MyDynamicPony from '@/components/MyDynamicPony';
import Navbar from '@/components/Navbar';
import * as auth from './services/AuthService';

export default {
  name: 'App',
  components: {
    MyDynamicPony,
    Navbar,
  },

  props: {
    source: String,
  },
  data() {
    return {
    };
  },
  methods: {
    logout() {
      auth.logout();
      this.$router.push({ name: 'home'});
    },
  },
  beforeCreate() {
    this.$store.dispatch('authenticate');
    fetch(this.$store.state.apiUrl + '/user', {
      method: 'GET',
    })
    // .then((res) => res.json())
    .then((res) => console.log(res));
  },
};
</script>
