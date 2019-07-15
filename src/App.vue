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
      <br/>
      <br/>
      <br/>
      <v-container>
        <v-layout text-xs-center wrap>
          <v-flex xsm12>
            <v-btn color="success">
              <router-link class="route" to="/ponies">View Ponies</router-link>  
            </v-btn>
          </v-flex>
        </v-layout>
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
