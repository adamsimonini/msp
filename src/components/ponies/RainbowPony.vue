<template>
    <div class="pony-block">
        <p>I AM THE RAINBOW PONY!!!</p>
        <br/>
        <v-img
          :src="require('@image/rainbow-pony.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
    </div>
</template>

<script>
export default {
  name: 'RainbowPony',
};
</script>

<style>

</style>
