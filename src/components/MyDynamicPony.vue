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

export default {
  name: 'MyDynamicPony',
  data() {
    return {
      showWhich: 'RainbowPony',
      dynamicComponent: {
        template: `<p>Wheee</p>`
      },
    }
  }
};
</script>

<style>
button {
  background: black;
  color: white;
  padding: 0 2%;
  margin: 2%;
}
.pony-container {
  height: 80vh; 
}
</style>
