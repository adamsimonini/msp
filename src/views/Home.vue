<template>
    <v-container>
      <div class="button-bar">
        <router-link to="/tasks">
          <v-btn color="warning">{{ $t("message.viewTasks") }}</v-btn>
        </router-link>
        <router-link v-if="!$store.state.isLoggedIn" to="/login">
          <v-btn color="warning">{{ $t("message.login") }}</v-btn>
        </router-link>
        <router-link v-if="!$store.state.isLoggedIn" to="/register">
          <v-btn color="warning">{{ $t("message.register") }}</v-btn>
        </router-link>
      </div>
      <div class="form-example-container">
        <Form :questions="this.screeningQuestionsOne" class="standard-form form-example"/>
        <Form :questions="this.screeningQuestionsTwo" class="nonstandard-form form-example"/>
        <Form :questions="this.screeningQuestionsTwo" class="nonstandard-form form-example"/>
      </div>
      <div class="form-example-container">
        <!-- <Form :questions="this.screeningQuestionsOne" class="standard-form form-example"/>
        <Form :questions="this.screeningQuestionsTwo" class="nonstandard-form form-example"/>
        <Form :questions="this.screeningQuestionsThree" class="standard-form form-example"/> -->
      </div>
    </v-container>
</template>

<script>
  import * as screeningQuestions from '@/components/form/form-questions/ScreeningQuestions';
  import * as projectInfoQuestions from '@/components/form/form-questions/ScreeningQuestions';

  import Form from "@/components/form/Form";
  export default {
    name: 'home',
    components: {
      Form,
    },
    data() {
      return {
        screeningQuestionsOne: screeningQuestions.questionSetOne,
        screeningQuestionsTwo: screeningQuestions.questionSetTwo,
        screeningQuestionsThree: screeningQuestions.questionSetThree,
      };
    },
    methods: {
    },
  };
</script>

<style scoped>
.button-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.form-example-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 20px;
}
.form-example {
  min-height: 600px;
  margin: 10px 0;
}
.form-example:nth-child(odd) {
  border: 1px solid #FFC107;
}
.form-example:nth-child(even) {
  border: 1px solid red;
}
</style>