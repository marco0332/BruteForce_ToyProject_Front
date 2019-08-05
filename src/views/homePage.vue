<template>
    <div id="homePageApp">
        <v-container>
            <v-layout align-center justify-center row fill-height>
                <v-flex text-xs-center id="title"><span>BRUTE FORCE</span></v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar'

export default {
  name: 'homePage',
  components: {
    SearchBar
  },
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
    align-items : center
}

#homePageApp {
    height: 100vh;
    background-color: red;
    padding:0;
    margin:0;
}
</style>
