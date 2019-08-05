<template>
    <div id="searchListPageApp">
        <v-container fill-height id="contentsArea">
            <v-layout xs12 v-for="question in questionList.slice(pageNum*questionsPerPage, (pageNum+1)*questionsPerPage-1)" :key="question.qid">
                <v-layout column>
                    <v-flex v-text="question.score"></v-flex>
                    <v-flex v-text="question.cntAnswer"></v-flex>
                </v-layout>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
  name: 'searchList',
  props: {
    query: { type: String }
  },
  data () {
    return {
      pageNum: 0,
      questionsPerPage: 20,
      questionList: []
    }
  },
  mounted () {
    this.getQuestionList()
  },
  methods: {
    /** Question List를 불러와서 data 변수에 저장하는 메소드 */
    getQuestionList () {
      this.questionList = [
        {
          qid: '1',
          title: '첫번째 질문이에용',
          contents: 'Vue.js가 너무 어려워요. 어떻게 하면 잘 할 수 있죠?',
          writerUid: 'user1',
          writerName: '이기인',
          tag: ['Vue.js', 'Javascript'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 1
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어려워요. 어떻게 하면 잘 할 수 있죠?',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4
        }
      ]
    }
  }
}
</script>

<style scoped>
#searchListPageApp {
    min-height: calc(100vh - 128px); /* nav_64px, footer_64px */
    background-color: white;
}

#contentsArea {
    background-color: red;
    width: 80vw;
}
</style>
