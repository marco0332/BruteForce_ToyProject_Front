<template>
  <v-flex class="share-font" wrap>
    <v-card outlined class="mx-auto">
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
</template>

<script>
export default {
  name: 'UserActivitiesNumberCard',
  props: {
    userQuestions: {type: Number},
    userAnswers: {type: Number},
    userSelections: {type: Number},
    userLikes: {type: Number}
  },
  data () {
    return {
      userActivities: [],
      activities: ['QUESTIONS', 'ANSWERS', 'SELECTIONS', 'LIKES'],
      tooltips: ['User\'s Questions Number', 'User\'s Answers Number', 'User\'s Selected Answers Number', 'User\'s Liked Number'],
      activitiesIcon: ['mdi-help', 'mdi-comment-outline', 'mdi-check', 'mdi-thumb-up-outline']
    }
  },
  methods: {
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
  .system-bar{
    font-family: 'Share Tech Mono', monospace;
  }
  .share-font {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1rem;
  }
</style>
