<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <div class="pony-container">
          <button @click="showWhich = 'RainbowPony'">Show Rainbow Pony</button>
          <button @click="showWhich = 'PurplePony'">Show Purple Pony</button>
          <button @click="showWhich = 'YellowPony'">Show Yellow Pony</button>
          <component v-bind:is='dynamicComponent'></component>
          <component v-bind:is='showWhich'></component>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RainbowPony from '@/components/ponies/RainbowPony';
import PurplePony from '@/components/ponies/PurplePony';
import YellowPony from '@/components/ponies/YellowPony';

export default {
  name: 'MyDynamicPony',
  components: {
    RainbowPony,
    PurplePony,
    YellowPony,
  },
  data() {
    return {
      showWhich: 'RainbowPony',
    };
  },
};
</script>

<style>
button {
  background: black;
  color: white;
  padding: 0 2%;
  margin: 2%;
  border: 1px solid white;
}
button:hover {
  background: white;
  color: black;
  border: 1px solid black;
}
.pony-container {
  height: 80vh; 
}
</style>
