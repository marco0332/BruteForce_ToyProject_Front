<template>
  <v-app>
    <v-container id="userPageApp" grid-list-md style="height: inherit; margin-top: 2%">
      <v-layout wrap>

        <!--   User Information Card   -->
        <v-flex xs3 style="margin: 2%" fixed>
          <v-card class="mx-auto" outlined>
            <v-img class="white--text" height="200px" :src="getImageUrl('bruteForce.png')"></v-img>
            <v-card-title>{{ userName }}</v-card-title>
            <v-card-text><v-icon size="17">far fa-envelope</v-icon> {{ userEmail }}<br><v-icon size="17">far fa-address-card</v-icon> {{ userGroup }}</v-card-text>
            <v-card-text>{{ userInfo }}</v-card-text>
            <v-divider class="mx-3 my-5"></v-divider>

            <v-layout class="mr-5">
              <v-chip  class="share-font mx-5" label size="5" :color="colors[userGrade]" text-color="white">{{grades[userGrade]}}</v-chip>
              <v-spacer></v-spacer>
              <span class="force">{{userForce}}</span>&nbsp;<span class="force" style="color: gray; font-size: 1rem; margin: auto;">FORCE</span>
            </v-layout>
            <v-card-actions>
              <v-spacer></v-spacer>

              <!--  User Information Editor Modal  -->
              <v-dialog v-show="currentUserId === userId" v-model="userEditor" persistent width="800">
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on" @click="getUserDetailToEdit"><v-icon>fas fa-cog</v-icon></v-btn>
                </template>
                <v-card>
                  <v-card-title><v-icon>fas fa-user-edit</v-icon></v-card-title>
                  <v-card-text>
                    <v-text-field label="User Name" v-model="editedName"></v-text-field>
                    <v-text-field label="User Group" v-model="editedGroup"></v-text-field>
                    <v-textarea label="User Information" v-model="editedInfo"></v-textarea>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="updateUserInfo">Save</v-btn>
                    <v-btn text @click="userEditor = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-layout xs9 style="margin-top: 2%">
          <!--  User Activity Information -->
          <v-flex class="share-font" wrap xs4.5 style="margin-left: 2%; margin-right: 2%">
            <!--   Point   -->
            <v-card outlined class="mx-auto" max-width="500">
              <v-system-bar dark color="cyan darken-1">
                <v-icon>fas fa-keyboard</v-icon>
                <v-spacer></v-spacer>
                <span class="system-bar">ACTIVITIES</span>
              </v-system-bar>

              <v-tooltip v-for="i in [0, 1, 2, 3]" :key="i" bottom>
                <template v-slot:activator="{ on }">
                  <v-layout wrap class="ml-1 mr-5 my-3 share-font" v-on="on" >
                    <v-btn icon><v-icon size="32" >{{activitiesIcon[i]}}</v-icon></v-btn>
                    <span style="color: darkgray; font-size: 1.1rem; margin: auto">{{activities[i]}}</span>
                    <v-spacer></v-spacer>
                    <span style="font-size: 1.8rem; margin: auto">{{userActivities[i]}}</span>
                  </v-layout>
                </template>
                <span>{{tooltips[i]}}</span>
              </v-tooltip>
            </v-card>
          </v-flex>

          <v-flex class="share-font" wrap xs4.5 style="margin-left: 2%; margin-right: 2%">
            <v-card outlined class="mx-auto" max-width="500">
              <v-system-bar dark color="light-blue darken-1">
                <v-icon>fas fa-tags</v-icon>
                <v-spacer></v-spacer>
                <span class="system-bar">TAGS</span>
              </v-system-bar>
              <v-spacer></v-spacer>
              <v-card-text>BRUTE FORCE</v-card-text>
              <v-card-title>
                {{userForce}} FORCE
              </v-card-title>
              <v-card-text>


              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'UserPage',
  props: {
    userId: {type: String}
  },
  data () {
    return {
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
      userActivities: [],
      editedName: '',
      editedGroup: '',
      editedInfo: '',
      currentUserId: '1',
      userEditor: false,
      grades: ['IRON', 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND', 'MASTER', 'CHALLENGER'],
      colors: ['#4a4433', '#c7a238', '#c7c7c7', '#fae84b', '#3e66f7', '#00fffb', '#a027d9', '#f2273f'],
      activities: ['QUESTIONS', 'ANSWERS', 'SELECTIONS', 'LIKES'],
      tooltips: ['User\'s Questions Number', 'User\'s Answers Number', 'User\'s Selected Answers Number', 'User\'s Liked Number'],
      activitiesIcon: ['mdi-help', 'mdi-comment-outline', 'mdi-check', 'mdi-heart-outline']
    }
  },
  methods: {
    getImageUrl (img) {
      return require('../assets/' + img)
    },
    getUserDetailToEdit () {
      this.editedName = this.userName
      this.editedGroup = this.userGroup
      this.editedInfo = this.userInfo
    },
    updateUserInfo () {
    },
    getUserActivity () {
      this.userActivities = [this.userQuestions, this.userAnswers, this.userSelections, this.userLikes]
    }
  },
  mounted () {
    this.getUserActivity()
  }
}
</script>

<style scoped>
#userPageApp {
  height: calc(100vh - 128px); /* nav_64px, footer_64px */
}
.system-bar{
  font-family: 'Share Tech Mono', monospace;
}
.share-font {
  font-family: 'Share Tech Mono', monospace;
  font-size: 1rem;
}
.force {
  font-family: 'Share Tech Mono', monospace;
  font-size: 1.3rem;
}
</style>
