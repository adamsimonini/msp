<template>
    <v-container>
        <h2>HOME</h2>
        <router-link to="/login">
          <v-btn color="success">Log In</v-btn>
        </router-link>
        <router-link to="/register">
          <v-btn color="success">Register</v-btn>
        </router-link>
    </v-container>
</template>

<script>
  export default {
    name: 'home',
    data: () => ({

    }),

    methods: {
    },
  };
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: space-evenly;
    align-items: center;
}
</style>