<template>
  <v-container id="userPageApp" grid-list-md text-center style="height: inherit;">
    <v-layout wrap>

      <!--   User Information Card   -->
      <v-flex xs3 style="margin-top: 3%">
        <v-card class="mx-auto" outlined>
          <v-img class="white--text" height="200px" :src="getImageUrl('bruteForce.png')"></v-img>
          <v-card-title>{{ userName }}&nbsp;<v-chip class="ma-2" outlined style="color: indigo">{{ userGrade }}<v-icon small right>fas fa-star</v-icon></v-chip></v-card-title>
          <v-card-text>{{ userEmail }}</v-card-text>
          <v-card-text>{{ userInfo }}</v-card-text>
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
                    <v-text-field label="User Email" v-model="editedEmail"></v-text-field>
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

      <!--  User Activity Information -->
      <v-flex xs9>
        <!--   Point   -->
        <v-card class="mx-auto" max-width="600">
          <v-toolbar flat dense>
            <v-toolbar-title>
              <span class="subheading">BRUTE FORCE</span>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-layout justify-space-between mb-4>
              <v-flex text-left>
                <span class="display-3 font-weight-light" v-text="userForce"></span>
                <span class="subheading font-weight-light mr-1">FORCE</span>
<!--                <v-fade-transition>-->
<!--                  <v-avatar v-if="isPlaying" :color="color" :style="{animationDuration: animationDuration}"-->
<!--                    class="mb-1 v-avatar&#45;&#45;metronome"-->
<!--                    size="12"-->
<!--                  ></v-avatar>-->
<!--                </v-fade-transition>-->
              </v-flex>
            </v-layout>

            <v-slider readonly v-model="userForce" track-color="grey" min="0" max="100">
              <template v-slot:prepend>
                <v-chip class="ma-2" text-color="white" style="color: indigo">P</v-chip>
              </template>
              <template v-slot:append>
                <v-chip  class="ma-2" text-color="white" color="indigo">M</v-chip>
              </template>
            </v-slider>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
      userGrade: 'Master',
      userForce: 50,
      editedName: '',
      editedEmail: '',
      editedInfo: '',
      currentUserId: '1',
      userEditor: false
    }
  },
  methods: {
    getImageUrl (img) {
      return require('../assets/' + img)
    },
    getUserDetailToEdit () {
      this.editedName = this.userName
      this.editedEmail = this.userEmail
      this.editedInfo = this.userInfo
    },
    updateUserInfo () {
    }
  }
}
</script>

<style scoped>
#userPageApp {
  height: calc(100vh - 128px); /* nav_64px, footer_64px */
}
</style>
