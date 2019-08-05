<template>
  <v-layout>
    <v-flex style="padding-left:20%; padding-right:20%">
      <v-form style="text-align:center; margin-bottom: 10%">
        <v-text-field label="Name*" v-model="name" type="name" required></v-text-field>
        <v-text-field label="Email*" v-model="email" type="email" required></v-text-field>
        <v-text-field label="Password*" v-model="password" :rules="[rules.min, rules.required]" type="password" required></v-text-field>
        <v-text-field label="Confirm Password*" v-model="password2" :rules="[rules.passwordMatch, rules.required]" type="password" required></v-text-field>
        <v-btn text icon @click="signUp">Sign Up</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      password2: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 6 || 'Min 6 characters',
        passwordMatch: pass =>
          this.password === pass || 'Please confirm password'
      }
    }
  },
  methods: {
    signUp () {
    }
  }
}
</script>

<style scoped>

</style>
