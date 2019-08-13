<template>
    <v-app id="questionDetailPageApp">
        <div id="titleArea" class="backColorSetting">
            <v-layout>
                <v-flex sm3></v-flex>
                <v-flex sm7 class="verticalEnd toFlex" id="detailTitleArea">
                    <v-layout column>
                        <!-- Title -->
                        <v-layout id="subHeader">
                            <v-flex row>
                                <p id="keyword"><span>{{questionData.title}}{{questionData.title}}</span></p>
                            </v-flex>
                        </v-layout>
                        <!-- tag lists -->
                        <v-layout id="tagArea">
                            <v-flex>
                                <p class="tagListDetail"
                                    v-for="(tag, index) in this.questionData.tag"
                                    :key="index"
                                >
                                    {{tag}}
                                </p>
                            </v-flex>
                        </v-layout>
                    </v-layout>
                </v-flex>
            </v-layout>
        </div>
        <!-- 질문 내용 -->
        <post :item="this.questionData"/>
        <div class="answerArea">{{questionData.answers.length}} 답변</div>
        <!-- 답변 내용 -->
        <div v-for="(item, index) in this.questionData.answers"
                  :key="index" >
            <answer :item="item"/>
            <div class="answerDivideLine"></div>
        </div>
    </v-app>
</template>

<script>
import questionService from '../services/question'
import post from '../components/post'
import answer from '../components/answer'

export default {
  name: 'questionDetailPage',
  components: {
    post,
    answer
  },
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
          writerName: '이기인',
          writerGrade: 7,
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

어떤 서버 기반으로 Vue.js를 구현하실지는 모르겠지만, Vue.js의 기본 문법와 그 이론을 공부하시면 좋을 것 같아요. 그리고 Vuetify라는 API를 사용하면 디자인을 구성하기가 훨씬 용이합니다. 자주 사용하는 태그들이 이미 어느정도 틀이 갖추어진 내용물로 바로 출력 가능하거든요!

\`\`\`java
import java.io.*;

public class Main {
    public static void main(String[] args){
        System.out.println("Hello World");
    }
}
\`\`\`
`,
              timestamp: new Date().getTime(),
              score: Number(0),
              bSelection: false,
              comments: [],
              photoURL: '',
              writerGrade: 5,
            },
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
              comments: [],
              photoURL: '',
              writerGrade: 3,
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

<style>
#questionDetailPageApp {
  background-color: white;
}

.v-application--wrap {
  min-height: 0vh;
}

#titleArea {
  min-height: calc(47vh - 64px);
  /* max-height: calc(47vh - 64px); */
  color: white;
}

#detailTitleArea {
  min-height: calc(47vh - 64px);
  margin: 0 0 2vh 4vw;
}

#subHeader {
  margin: 3vh 0px 0.5vh 0px;
}

#tagArea {
  margin: 10px 0 5px 0;
}

#keyword {
  font-size: 1.4em;
  margin: 0 0 0 10px;
}

#keyword span {
  font-size: calc(1.96vh + 1.88vw);
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

.answerArea {
  font-size: 1.32rem;
  width: 89vw;
  margin: auto;
  padding-top: 45px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.45);
}

.answerDivideLine {
  width: 86vw;
  margin: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.24);
}
</style>
