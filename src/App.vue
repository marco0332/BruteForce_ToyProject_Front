<template>
    <v-app id="app">
        <Nav />

        <v-content id="appContent">
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
export default {
  name: 'App',
  
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
