<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>

          <div>
            <button @click="showWhich = 'RainbowPony'">Show Rainbow Pony</button>
            <button @click="showWhich = 'PurplePony'">Show Purple Pony</button>
            <component :is="showWhich"></component>
          </div>

        <p>I AM A DYNAMIC PONY!!!</p>
        <v-img
          :src="require('@image/rainbow-pony.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import RainbowPony from './ponies/RainbowPony';
import PurplePony from './ponies/PurplePony';

export default {
  data: () => ({
    showWhich: 'RainbowPony',
  }),
};
</script>

<style>

</style>
