<!-- Veutify grid system: https://vuetifyjs.com/en/framework/grid 
The system works as follows: v-container » v-layout » v-flex
A container should probably have only one layout, but each layout may contain multiple flex items
-->
<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <v-container>
       <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MyDynamicPony from '@/components/MyDynamicPony';
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    MyDynamicPony,
    Navbar,
  },
  data () {
    return {
      //
    };
  },
};
</script>
