<template>
    <v-container>
        <router-link to="/tasks">
          <v-btn color="warning">{{ $t("message.viewTasks") }}</v-btn>
        </router-link>
        <router-link v-if="!$store.state.isLoggedIn" to="/login">
          <v-btn color="warning">{{ $t("message.login") }}</v-btn>
        </router-link>
        <router-link v-if="!$store.state.isLoggedIn" to="/register">
          <v-btn color="warning">{{ $t("message.register") }}</v-btn>
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