<template>
    <v-layout id='Nav'>
        <!-- Logo, Title -->
        <v-flex xs2 class="toFlex">
            <v-flex class="verticalCenter toFlex">
                <v-btn text to="/" id="toHomeBtn">
                    <span id="Title">BRUTE FORCE</span>
                </v-btn>
            </v-flex>

        </v-flex>

        <!-- Search box -->
        <v-flex xs7>
            <SearchBar />
        </v-flex>
    </v-layout>
</template>

<script>
import SearchBar from './SearchBar'

export default {
  name: 'Nav',
  components: {
    SearchBar
  },
  data () {
    return {
      bAuthentication: true
    }
  }
}
</script>

<style scoped>
#Nav {
  position: fixed;
  background-color: blue;
  width: 100vw;
  height: 64px;
}

#toHomeBtn::before {
  color: transparent !important;
}

#Title {
  font-size: 3vh;
}

.toFlex {
    display: flex;
}

.verticalCenter {
  align-items:center;
  justify-content:center;
}
</style>
