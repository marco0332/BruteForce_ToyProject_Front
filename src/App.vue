<template>
    <div id="myContainer">
        <Nav />
        <div id="myApp">
            <router-view />
        </div>
        <Footer />
    </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
#myApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
  padding-top: 64px;
}

#myContainer {
  margin: 0;
  padding: 0;
}
</style>
