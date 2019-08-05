<template>
  <v-container>
    <v-layout xs4>
      <User></User>
    </v-layout>
  </v-container>
</template>

<script>
import User from '../components/User'

export default {
  name: 'UserPage',
  components: {
    User
  }
}
</script>

<style scoped>

</style>
