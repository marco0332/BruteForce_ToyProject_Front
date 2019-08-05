<template>
  <v-flex>
    <v-form>
      <v-text-field v-model="email" label="email" type="email" required></v-text-field>
      <v-text-field v-model="password" label="password" type="password" required></v-text-field>
      <v-btn round color="success" @click="signIn">로그인</v-btn>
    </v-form>
  </v-flex>
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
