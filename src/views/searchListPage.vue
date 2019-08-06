<template>
    <div id="searchListPageApp">
        <v-container id="contentsArea">

            <v-layout id="subHeader">
                <h2>검색 결과</h2>
                <v-spacer></v-spacer>
                <v-btn text id="addQuestionBtn" to="/questionDetailPage/1">
                    <v-icon>fa-pencil</v-icon>
                    <span>&nbsp;질문하기</span>
                </v-btn>
            </v-layout>

            <v-layout id="searchKeyword">
                <span id="keyword">'{{query}}'</span><span>에 대한 검색 결과</span>
            </v-layout>

            <hr style="border-top:1px solid rgb(28, 42, 165)" />
            <!-- <v-layout v-for="question in questionList.slice(pageNum*questionsPerPage, (pageNum+1)*questionsPerPage-1)" :key="question.qid">
                <v-container class="unitContent">
                    <v-layout column>
                        <v-flex v-text="question.score"></v-flex>
                        <v-flex v-text="question.cntAnswer"></v-flex>
                    </v-layout>
                </v-container>
            </v-layout> -->
            <searchListTable></searchListTable>
        </v-container>
    </div>
</template>

<script>
import searchListTable from '../components/searchListTable'

export default {
  name: 'searchList',
  components: {
    searchListTable
  },
  props: {
    query: { type: String }
  }
//   data () {
//     return {
//       pageNum: 0,
//       questionsPerPage: 20,
//       questionList: []
//     }
//   },
//   mounted () {
//     this.getQuestionList()
//   },
//   methods: {
//     /** Question List를 불러와서 data 변수에 저장하는 메소드 */
//     getQuestionList () {
//       this.questionList = [
//         {
//           qid: '1',
//           title: '첫번째 질문이에용',
//           contents: 'Vue.js가 너무 어려워요. 어떻게 하면 잘 할 수 있죠?',
//           writerUid: 'user1',
//           writerName: '이기인',
//           tag: ['Vue.js', 'Javascript'],
//           bClosed: false,
//           timestamp: new Date().getTime(),
//           score: Number(0),
//           cntAnswer: 1
//         },
//         {
//           qid: '2',
//           title: '질문이 두개는 있어야지!',
//           contents: 'Vue.js가 너무 어려워요. 어떻게 하면 잘 할 수 있죠?',
//           writerUid: 'user2',
//           writerName: '이계인',
//           tag: ['Vue.js', 'Javascript', 'Front-end'],
//           bClosed: false,
//           timestamp: new Date().getTime(),
//           score: Number(0),
//           cntAnswer: 4
//         }
//       ]
//     }
//   }
}
</script>

<style scoped>
#searchListPageApp {
  min-height: calc(100vh - 128px); /* nav_64px, footer_64px */
  background-color: white;
}

#contentsArea {
  width: 80vw;
}

#subHeader {
  margin: 30px 0px 10px 0px;
}

.unitContent {
  border-bottom: 1px solid rgb(28, 42, 165);
}

#searchKeyword {
  margin: 30px 0 50px 0px;
}

#keyword {
  font-weight: bold;
}

#addQuestionBtn {
    color:#360d7e;
}
#addQuestionBtn:hover {
    background-color: #0a07b81a;
}
</style>
