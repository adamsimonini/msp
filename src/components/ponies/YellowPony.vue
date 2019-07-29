<template>
  <div class="pony-block">
      <p>I AM THE YELLOW PONY!!!</p>
      <v-img
        :src="require('@image/yellow-pony.png')"
        class="my-3"
        contain
        height="200"
      ></v-img>
  </div>
</template>

<script>
export default {
  name: 'YellowPony',
};
</script>

<style scoped>
</style>
