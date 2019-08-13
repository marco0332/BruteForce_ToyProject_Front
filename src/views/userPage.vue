<template>
  <v-app>

    <!--  Desktop View   -->
    <v-container hidden-sm-and-down id="userPageApp" grid-list-md style="height: inherit; margin-top: 2%; margin-bottom: 2%">
      <v-layout xs3>
        <!--   User Information Card   -->
        <UserInformationCard
          :userId="userId"
          :userName="userName"
          :userEmail="userEmail"
          :userGroup="userGroup"
          :userInfo="userInfo"
          :userGrade="userGrade"
          :userForce="userForce" style="margin: 2%; position: fixed; max-width: 300px"></UserInformationCard>

        <v-layout xs3></v-layout>

        <!--  User Activity Information -->
        <v-layout xs9 style="margin-top: 2%">

          <!--   User Activities Number Card  -->
          <UserActivitiesNumberCard
            :userQuestions="userQuestions"
            :userAnswers="userAnswers"
            :userSelections="userSelections"
            :userLikes="userLikes"></UserActivitiesNumberCard>

          <!--     Tags     -->
          <UserTagsCard
            :userTags="userTags" style="margin-left: 2%; margin-right: 2%"></UserTagsCard>
        </v-layout>
      </v-layout>

      <!--   Activity List    -->
      <v-layout>
        <v-flex xs3 style="margin: 10%"></v-flex>
        <UserActivitiesListCard
          :userId="userId" style="margin-left: 2%; margin-right: 2%"></UserActivitiesListCard>
      </v-layout>
    </v-container>

    <!--  Mobile View  -->
    <v-container hidden-md-and-up>
      <v-flex style="margin: 5%">
        <!--   User Information Card   -->
        <UserInformationCard
          :userId="userId"
          :userName="userName"
          :userEmail="userEmail"
          :userGroup="userGroup"
          :userInfo="userInfo"
          :userGrade="userGrade"
          :userForce="userForce" ></UserInformationCard>
      </v-flex>

      <v-flex style="margin: 5%">
        <!--   User Activities Number Card  -->
        <UserActivitiesNumberCard
          :userQuestions="userQuestions"
          :userAnswers="userAnswers"
          :userSelections="userSelections"
          :userLikes="userLikes"></UserActivitiesNumberCard>
      </v-flex>

      <v-flex style="margin: 5%">
        <!--     Tags     -->
        <UserTagsCard
          :userTags="userTags"></UserTagsCard>
      </v-flex>

      <v-flex style="margin: 5%">
        <!--   Activity List    -->
        <UserActivitiesListCard
          :userId="userId"></UserActivitiesListCard>
      </v-flex>
    </v-container>
  </v-app>
</template>

<script>
import UserInformationCard from '../components/UserInformationCard'
import UserActivitiesNumberCard from '../components/UserActivitiesNumberCard'
import UserTagsCard from '../components/UserTagsCard'
import UserActivitiesListCard from '../components/UserActivitiesListCard'

export default {
  name: 'UserPage',
  props: {
    userId: {type: String}
  },
  components: {
    UserActivitiesNumberCard,
    UserInformationCard,
    UserTagsCard,
    UserActivitiesListCard
  },
  data () {
    return {
      currentUserId: '1',
      userName: 'BRUTE FORCE',
      userInfo: '안녕하세요. BRUTE FORCE 입니다.',
      userEmail: 'BRUTEFORCE@ssafy.com',
      userGroup: 'SSAFY',
      userGrade: 7,
      userForce: 579,
      userQuestions: 3,
      userAnswers: 500,
      userSelections: 30,
      userLikes: 78,
      userTags: ['python', 'javascript', 'C++', 'vue.js', 'vuetify', 'algorithm', 'spring', 'django']
    }
  },
  methods: {

  }
}
</script>

<style scoped>
#userPageApp {
  height: calc(100vh - 128px); /* nav_64px, footer_64px */
}
.share-font {
   font-family: 'Share Tech Mono', monospace;
   font-size: 1rem;
 }
</style>
