<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 md12 lg12>
        <!-- v-flex takes in HTML attributes and applies the appropriate flex clss styles -->
        <div class="pony-container">
          <component v-bind:is='showWhich'></component>
          <div>
            <button @click="showWhich = 'RainbowPony'">Show Rainbow Pony</button>
            <button @click="showWhich = 'PurplePony'">Show Purple Pony</button>
            <button @click="showWhich = 'YellowPony'">Show Yellow Pony</button>
          </div>
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
.pony-container div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
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
  height: 25vh; 
}
</style>
