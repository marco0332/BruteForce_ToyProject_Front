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
      <v-flex v-if="curView !== 'homePage'" class="verticalCenter toFlex">
        <SearchBarNav />
      </v-flex>
    </v-flex>

    <!--  Sign In Dialog  -->
    <v-flex xs1 v-if="!bAuthentication" class="verticalCenter toFlex">
      <v-dialog persistent max-width="600px" v-model="signInDialog">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" dark>로그인</v-btn>
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
          <v-btn text v-on="on" dark>회원가입</v-btn>
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
      <v-btn text dark @click="signOut">로그아웃</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SearchBarNav from './SearchBarNav'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { mapState } from 'vuex'

export default {
  name: 'Nav',
  components: {
    SearchBarNav,
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
  computed: {
    ...mapState(['curView'])
  },
  mounted () {
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
  font-size: 1.5rem;
}

.toFlex {
    display: flex;
}

.verticalCenter {
  align-items:center;
  justify-content:center;
}
</style>
