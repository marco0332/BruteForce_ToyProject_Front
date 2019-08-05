<template>
  <v-layout>
    <v-flex style="padding-left:20%; padding-right:20%">
      <v-form style="text-align:center; margin-bottom: 5%">
        <v-text-field v-model="email" label="email" type="email" required></v-text-field>
        <v-text-field v-model="password" label="password" type="password" required></v-text-field>
        <v-btn text icon @click="signIn">Sign In</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn () {
    }
  }
}
</script>
<style>

</style>
