<template>
  <v-layout id='Nav' style="z-index: 1;" class="backColorSetting">
    <!-- Logo, Title -->
    <v-flex xs3 class="verticalCenter toFlex">
      <v-btn text to="/" id="toHomeBtn">
        <span id="Title">BRUTE FORCE</span>
      </v-btn>
    </v-flex>

    <!-- Search box -->
    <v-flex xs8 class="toFlex">
      <v-flex class="verticalCenter toFlex">
        <SearchBar />
      </v-flex>
    </v-flex>

    <!--  Sign In Dialog  -->
    <v-flex xs1 v-if="!bAuthentication" class="verticalCenter toFlex">
      <v-dialog persistent max-width="600px" v-model="signInDialog">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" dark>Sign In</v-btn>
        </template>
        <v-card>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text icon @click="signInDialog = false"><v-icon>fas fa-times</v-icon></v-btn>
          </v-card-actions>
          <SignIn @SignIn="signInDialog = !signInDialog"></SignIn>
        </v-card>
      </v-dialog>
    </v-flex>

    <!--  Sign Up Dialog  -->
    <v-flex xs2 v-if="!bAuthentication" class="verticalCenter toFlex">
      <v-dialog persistent max-width="600px" v-model="signUpDialog">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" dark>Sign Up</v-btn>
        </template>
        <v-card>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text icon @click="signUpDialog = false"><v-icon>fas fa-times</v-icon></v-btn>
          </v-card-actions>
          <SignUp @SignUp="signUpDialog = !signUpDialog"></SignUp>
        </v-card>
      </v-dialog>
    </v-flex>

    <!--  User  -->
    <v-flex xs1 v-if="bAuthentication" class="verticalCenter toFlex">
      <v-btn  text dark :to="{name: 'userPage', params: {userId: userId}}">{{ userName }}</v-btn>
    </v-flex>

    <!--  Sign Out  -->
    <v-flex xs2 v-if="bAuthentication" class="verticalCenter toFlex">
      <v-btn text dark @click="signOut">Sign Out</v-btn>
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
      signInDialog: false,
      signUpDialog: false,
      userName: 'BruteForce',
      userId: '1'
    }
  },
  methods: {
    signOut () {
    }
  }
}
</script>

<style scoped>
#Nav {
  position: fixed;
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
