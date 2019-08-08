<template>
    <v-app id="questionDetailPageApp">
        <div>
            <v-container id="contentsArea">

                <v-layout id="subHeader">
                    <v-flex row>
                        <p id="keyword"><span>{{this.questionData.title}}</span></p>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <v-btn class="hidden-sm-and-down" text id="addQuestionBtn" to="/questionDetailPage/1">
                        <v-icon hidden-sm-and-down>far fa-edit</v-icon>
                        <span>&nbsp;질문하기</span>
                    </v-btn>
                </v-layout>

                <v-layout id="questionMeta">
                    <span class="subData">질문날짜</span>
                    <span class="timestamp">{{ this.questionData.timestamp }}</span>
                </v-layout>
            </v-container>
        </div>
    </v-app>
</template>

<script>
import questionService from '../services/question'

export default {
  name: 'questionDetailPage',
  props: {
    qid: { type: String }
  },
  data () {
    return {
      questionData: []
    }
  },
  created () {
    // this.getQuestionList()
    this.testQuestionList()
    this.questionData = this.questionData[0]
  },
  methods: {
    getQuestionList () {
      this.questionData = questionService.findQuestion(this.qid)
      this.questionData = questionService.convertToDate(this.questionData)
    },
    testQuestionList () {
      this.questionData = [
        {
          qid: '1',
          title: '첫번째 질문이에용 하하하 그렇다구 합니다',
          contents: 'Vue.js가 너무 어려워요. 어떻게 하면 잘 할 수 있죠?',
          writerUid: '1',
          writerName: 'BruteForce',
          tag: ['Vue.js', 'Javascript'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 1,
          answers: [
            {
              aid: 'ans1',
              writerUid: 'user1',
              writerName: '일유저',
              contents: `먼저 Vue.js는 기본적으로 RESTFUL APU로 작동합니다.

데이터를 주고받는 형식으로 JSON 형식을 사용하며, 따라서 데이터를 받았을 때 동작할 수 있게끔 페이지 디자인을 구성해야합니다.

어떤 서버 기반으로 Vue.js를 구현하실지는 모르겠지만, Vue.js의 기본 문법와 그 이론을 공부하시면 좋을 것 같아요. 그리고 Vuetify라는 API를 사용하면 디자인을 구성하기가 훨씬 용이합니다. 자주 사용하는 태그들이 이미 어느정도 틀이 갖추어진 내용물로 바로 출력 가능하거든요!`,
              timestamp: new Date().getTime(),
              score: Number(0),
              bSelection: false,
              comments: []
            }
          ],
          comments: [
            {
              cid: 'comm2',
              wrtierUid: 'user2',
              writerName: '김기인',
              contents: '댓글 테스트 중입니드아요 흐ㅏ하하하',
              timestamp: new Date().getTime()
            }],
          photoURL: 'https://cdn.vuetifyjs.com/images/john.jpg'
        }]

      this.questionData = questionService.convertToDate(this.questionData)
    }
  }
}
</script>

<style scoped>
#questionDetailPageApp {
  min-height: calc(100vh - 128px);
  background-color: white;
}

#contentsArea {
  width: 90vw;
  min-width: 90vw;
}

#subHeader {
  margin: 3vh 0px 1.5vh 0px;
}

#keyword {
  font-size: 1.4em;
  min-width:106px;
  margin: 0 0 0 10px;
}

#keyword span {
  font-size: 1.5rem;
}

#questionMeta{
  color: grey;
  padding-bottom: 8px;
  margin-bottom: 16vh;
  border-bottom: 0.5px solid #e4e6e8;
}

.subData {
  margin-right: 13px;
  font-size: 0.87rem;
}

.timestamp {
  font-size: 0.92rem;
}

#addQuestionBtn {
  color:#360d7e;
  border-bottom: 1.2px solid #471e8f;
}

#addQuestionBtn::before {
  background-color: white;
}

#addQuestionBtn:hover {
  background-color: #0a07d81a;
}
</style>
