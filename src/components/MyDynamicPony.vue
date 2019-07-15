<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12 md12 lg12>
        <!-- v-flex takes in HTML attributes and applies the appropriate flex clss styles -->
        <div class="pony-container">
          <button @click="showWhich = 'RainbowPony'">Show Rainbow Pony</button>
          <button @click="showWhich = 'PurplePony'">Show Purple Pony</button>
          <button @click="showWhich = 'YellowPony'">Show Yellow Pony</button>
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

<style scoped>
</style>
