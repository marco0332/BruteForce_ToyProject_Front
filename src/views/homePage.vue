<template>
    <v-app>
        <v-container>
            <v-layout >
                <v-flex id="title">BRUTE FORCE</v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title {
    text-align: center;
}
</style>
