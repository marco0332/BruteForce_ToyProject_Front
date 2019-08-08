<template>
  <v-flex wrap xs9 style="margin-top: 5%" class="mx-auto">
    <v-btn-toggle class="share-font">
      <v-btn color="lime darken-1" dark small @click="selectQuestion">QUESTIONS</v-btn>
      <v-btn color="light-green darken-1" dark small @click="selectAnswer">ANSWERS</v-btn>
      <v-btn v-if="userId === currentUserId" color="green darken-1" dark small @click="selectComment">COMMENTS</v-btn>
    </v-btn-toggle>

    <v-card outlined v-if="question" wrap  flat width="850">
      <v-layout column fill-height>
        <v-list two-line>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="grey lighten-2">mdi-lightbulb-off-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>옴뇸뇸</v-list-item-title>
              <v-list-item-subtitle>
                <v-chip label color="#CFCFCF" dark small>python</v-chip>
                <v-chip label color="#CFCFCF" dark small>django</v-chip>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content>
              <v-list-item-subtitle><v-icon>mdi-thumb-up-outline</v-icon>&nbsp;&nbsp;&nbsp;3</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-subtitle>2019. 10. 21</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider ></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="yellow darken-2">mdi-lightbulb-on-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게</v-list-item-title>
              <v-list-item-subtitle>
                <v-chip label color="#CFCFCF" dark small>python</v-chip>
                <v-chip label color="#CFCFCF" dark small>django</v-chip>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content>
              <v-list-item-subtitle><v-icon>mdi-thumb-up-outline</v-icon>&nbsp;&nbsp;&nbsp;3</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-subtitle>2019. 10. 21</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider ></v-divider>
        </v-list>
      </v-layout>
    </v-card>

    <v-card v-if="answer" wrap  flat class="mx-auto" width="850">
      <v-layout column fill-height>
        <v-list two-line>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="grey lighten-2">mdi-checkbox-blank-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>옴뇸뇸</v-list-item-title>
              <v-list-item-subtitle>
                <v-chip label color="#CFCFCF" dark small>python</v-chip>
                <v-chip label color="#CFCFCF" dark small>django</v-chip>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content>
              <v-list-item-subtitle><v-icon>mdi-thumb-up-outline</v-icon>&nbsp;&nbsp;&nbsp;3</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-subtitle>2019. 10. 21</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider ></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="green accent-4">mdi-checkbox-marked-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게</v-list-item-title>
              <v-list-item-subtitle>
                <v-chip label color="#CFCFCF" dark small>python</v-chip>
                <v-chip label color="#CFCFCF" dark small>django</v-chip>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content>
              <v-list-item-subtitle><v-icon>mdi-thumb-up-outline</v-icon>&nbsp;&nbsp;&nbsp;3</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-subtitle>2019. 10. 21</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider ></v-divider>
        </v-list>
      </v-layout>
    </v-card>

    <v-card v-if="comment" wrap  flat class="mx-auto" width="850">
      <v-layout column fill-height>
        <v-list two-line>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-quote-open</v-icon><v-icon>mdi-format-quote-close</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>옴뇸뇸</v-list-item-title>
              <v-list-item-subtitle>아쉬워 벌써 목요일~~ 어떡해 벌써 목요일이야~~~</v-list-item-subtitle>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content>
              <v-list-item-subtitle>2019. 10. 21</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider ></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-quote-open</v-icon><v-icon>mdi-format-quote-close</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게</v-list-item-title>
              <v-list-item-subtitle>암오너봍ㅌ 눈에 보이는 사방이 바다야</v-list-item-subtitle>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content>
              <v-list-item-subtitle>2019. 10. 21</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider ></v-divider>
        </v-list>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'UserActivitiesListCard',
  props: {
    userId: {type: String}
  },
  data () {
    return {
      currentUserId: '1',
      question: true,
      answer: false,
      comment: false
    }
  },
  methods: {
    selectQuestion () {
      this.question = true
      this.answer = false
      this.comment = false
    },
    selectAnswer () {
      this.question = false
      this.answer = true
      this.comment = false
    },
    selectComment () {
      this.question = false
      this.answer = false
      this.comment = true
    }
  }
}
</script>

<style scoped>
  .share-font {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1rem;
  }
</style>
