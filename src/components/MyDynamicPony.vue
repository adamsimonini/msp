<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <p>I AM A DYNAMIC PONY!!!</p>
        <v-img
          :src="require('../../public/img/my-pony.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
    }),
  };
</script>

<style>

</style>
