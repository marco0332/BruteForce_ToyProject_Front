<template>
  <v-layout style="z-index: 1;" class="backColorSetting">
    <!-- Logo, Title -->
    <v-flex xs3 class="verticalCenter toFlex">
      <v-btn icon dark v-if="curView !== 'homePage'" text to="/" id="toHomeBtn">
        <v-icon size="35">mdi-home</v-icon>
      </v-btn>
    </v-flex>

    <!-- Search box -->
    <v-flex xs10 class="toFlex">
      <v-flex v-if="curView !== 'homePage'" class="verticalCenter toFlex">
        <SearchBarNav />
      </v-flex>
    </v-flex>

    <!--  Sign In Dialog  -->
    <v-flex xs2 v-if="!bAuthentication" class="verticalCenter toFlex">
      <v-dialog persistent max-width="600px" v-model="signInDialog">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" icon dark><v-icon size="30">mdi-account-arrow-left</v-icon></v-btn>
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
          <v-btn text v-on="on" dark icon><v-icon size="30">mdi-account-plus</v-icon></v-btn>
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
    <v-flex xs2 v-if="bAuthentication" class="verticalCenter toFlex">
      <v-btn text dark :to="{name: 'userPage', params: {userId: userId}}"><v-icon size="30">mdi-account-badge-horizontal-outline</v-icon></v-btn>
    </v-flex>

    <!--  Sign Out  -->
    <v-flex xs2 v-if="bAuthentication" class="verticalCenter toFlex">
      <v-btn text dark @click="signOut" icon><v-icon size="30">mdi-account-arrow-right</v-icon></v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SearchBarNav from './SearchBarNav'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { mapState } from 'vuex'

export default {
  name: 'MobileNav',
  components: {
    SearchBarNav,
    SignIn,
    SignUp
  },
  data () {
    return {
      bAuthentication: false,
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
  #toHomeBtn::before {
    color: transparent !important;
  }
  .verticalCenter {
    align-items:center;
    justify-content:center;
  }
</style>
