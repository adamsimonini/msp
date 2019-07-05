<template>
    <div>
        <p>I AM A DYNAMIC PONY!!!</p>
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
  data: () => ({
  }),
};
</script>

<style>

</style>
