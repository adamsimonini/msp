<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">My</span>
        <span>Little</span>
        <span class="font-weight-light">Ponies</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://mylittlepony.hasbro.com/en-ca"
        target="_blank"
      >
        <span class="mr-2">More Ponies</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <MyDynamicPony/>
    </v-content>
  </v-app>
</template>

<script>
import MyDynamicPony from '@/components/MyDynamicPony';

export default {
  name: 'App',
  components: {
    MyDynamicPony,
  },
  data () {
    return {
      //
    };
  },
};
</script>
