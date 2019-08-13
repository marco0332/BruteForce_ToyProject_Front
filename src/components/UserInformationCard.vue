<template>
  <v-flex >
    <v-card wrap class="mx-auto" outlined style="margin-bottom: 10%">
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
</template>

<script>
export default {
  name: 'UserInformationCard',
  props: {
    userId: {type: String},
    userName: {type: String},
    userEmail: {type: String},
    userGroup: {type: String},
    userInfo: {type: String},
    userGrade: {type: Number},
    userForce: {type: Number}
  },
  data () {
    return {
      editedName: '',
      editedGroup: '',
      editedInfo: '',
      currentUserId: '1',
      userEditor: false,
      grades: ['IRON', 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND', 'MASTER', 'CHALLENGER'],
      colors: ['#4a4433', '#c7a238', '#7d7d75', '#adb307', '#3e66f7', '#02a3a6', '#a027d9', '#f2273f']
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
    }
  }
}
</script>

<style scoped>
  .force {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.3rem;
  }
</style>
