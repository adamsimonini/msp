<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <h2>Login</h2>
    <v-text-field
      v-model="username"
      :counter="20"
      :rules="nameRules"
      label="Username"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="showPassword ? 'visibility' : 'visibility_off'"
      :rules="emailRules"
      :type="showPassword ? 'text' : 'password'"
      label="Password"
      hint="At least 8 characters"
      @click:append="showPassword = !showPassword"
      required
    ></v-text-field>



    <v-btn
      :disabled="!valid"
      color="success"
      @click="validate"
    >
      Validate
    </v-btn>
  </v-form>
</template>

<script>
  import * as auth from '@/services/AuthService';

  export default {
    name: 'login',
    data: () => ({
      valid: true,
      username: '',
      password: '',
      showPassword: false,
      nameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length <= 20) || 'Username must be less than 20 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Password is required',
        v => (v && v.length > 7) || 'At least 8 characters'
      ],
    }),

    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.onSubmit();
        }
      },
      onSubmit() {
        console.log('submitting form...');
        auth.login();
        this.$router.push({ name:'/ponies'} );
      }
    }
  }
</script>