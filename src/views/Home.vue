<template>
    <v-container>
        <p>{{ $t("message.derka") }}</p>
        <p>{{ $t("message.hello") }}</p>
        <router-link to="/tasks">
          <v-btn color="warning">View Tasks</v-btn>
        </router-link>
        <router-link v-if="!$store.state.isLoggedIn" to="/login">
          <v-btn color="warning">Log In</v-btn>
        </router-link>
        <router-link v-if="!$store.state.isLoggedIn" to="/register">
          <v-btn color="warning">Register</v-btn>
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