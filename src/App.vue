<template>
    <v-app id="app">
        <Nav />

        <v-content id="appContent">
            <router-view/>
        </v-content>

        <Footer />
    </v-app>
</template>

<script>
import Nav from "./components/Nav"
import Footer from "./components/Footer"

export default {
  name: 'App',
  components: {
      Nav,
      Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
}

#appContent {
  padding: 0;
}
</style>
