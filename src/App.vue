<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <MyDynamicPony/>
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
