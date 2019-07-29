<template>
    <div class="pony-block">
        <p>I AM THE PURPLE PONY!!!</p>
        <br/>
        <v-img
          :src="require('@image/purple-pony.jpg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
    </div>
</template>

<script>

export default {
    name: 'PurplePony',
};
</script>

<style>

</style>
