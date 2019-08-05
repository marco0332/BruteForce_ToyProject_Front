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

    <!--  Sign In Dialog  -->
    <v-flex class="verticalCenter toFlex">
      <v-dialog persistent hide-overlay scrollable v-model="signInDialog">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">Sign In</v-btn>
        </template>
        <v-card>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text icon @click="signInDialog = false"><v-icon>fas fa-times</v-icon></v-btn>
          </v-card-actions>
          <v-card-title>Sign In</v-card-title>
          <SignIn @SignIn="signInDialog = !signInDialog"></SignIn>
        </v-card>
      </v-dialog>
    </v-flex>
  </v-layout>
</template>

<script>
import SearchBar from './SearchBar'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default {
  name: 'Nav',
  components: {
    SearchBar,
    SignIn,
    SignUp
  },
  data () {
    return {
      bAuthentication: true,
      signInDialog: false
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
