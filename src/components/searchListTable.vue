<template>
    <v-app id="searchListPageApp">
        <v-list two-line flat id="questionVList">

            <v-list-item class="vListItem"
                v-for="(item, index) in sliceData"
                :key="index"
                @click="goToDetail(item.qid)"
            >
                <div class="stats">
                    <v-flex class="score">
                        <span class="score-sum-question">{{ item.score }}</span>
                        <div class="viewScore">추천</div>
                    </v-flex>
                    <div :class="item.bClosed ? 'status answer--active' : 'status answer--inactive'">
                        <span class="score-sum-question">{{ item.cntAnswer }}</span>
                        <div class="viewScore">답변</div>
                    </div>
                </div>
                <v-list-item-content>
                    <v-list-item-title class="questionTitle">{{item.title}}</v-list-item-title>
                    <v-list-item-subtitle class="questionContent" v-text="item.contents"></v-list-item-subtitle>
                    <!-- tag lists -->
                    <span class="tagList"
                        v-for="(tag, index) in item.tag"
                        :key="index"
                    >
                        {{tag}}
                    </span>
                </v-list-item-content>
                <v-btn dark class="hidden-sm-and-down userArea" text :to="{name: 'userPage', params: {userId: item.writerUid}}">
                    <v-list-item-avatar class="userIcon" color="indigo">
                        <v-icon dark class="emptyUser" v-if="item.photoURL === ''">account_circle</v-icon>
                        <img v-else :src="item.photoURL" :alt="item.writerName">
                    </v-list-item-avatar>
                    <div class="writer">
                        <span class="writerName">{{ item.writerName }}</span>
                        <div class="created_at">{{ item.timestamp }}</div>
                    </div>
                </v-btn>
            </v-list-item>

        </v-list>

        <br />
        <v-pagination
            v-model="curPageNum"
            :length="numOfPages"
            prev-icon="fa fa-caret-left"
            next-icon="fa fa-caret-right"
        >
        </v-pagination>
    </v-app>
</template>

<script>
import questionService from '../services/question'

export default {
  name: 'searchListTable',
  data () {
    return {
      curPageNum: 1,
      dataPerPage: 10,
      questionList: []
    }
  },
  created () {
    this.getQuestionList()
    questionService.convertToDate(this.questionList)
    // questionService.testQuestionList()
  },
  methods: {
    goToDetail (qid) {
      this.$router.push('/questionDetailPage/' + qid)
    },
    testQuestionList () {
      this.questionList = questionService.findAllQuestions()
      questionService.convertToDate(this.questionList)
    },
    /** Question List를 불러와서 data 변수에 저장하는 메소드 */
    getQuestionList () {
      this.questionList = [
        {
          qid: '1',
          title: '첫번째 질문이에용',
          contents: 'Vue.js가 너무 어려워요. 어떻게 하면 잘 할 수 있죠?',
          writerUid: '1',
          writerName: 'BruteForce',
          tag: ['Vue.js', 'Javascript'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 1,
          photoURL: 'https://cdn.vuetifyjs.com/images/john.jpg'
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: true,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4444,
          photoURL: 'https://cdn.vuetifyjs.com/images/john.jpg'
        },
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
          cntAnswer: 1,
          photoURL: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 두개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        },
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
          cntAnswer: 1,
          photoURL: ''
        },
        {
          qid: '2',
          title: '질문이 세개는 있어야지!',
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4,
          photoURL: ''
        }
      ]
    }
  },
  computed: {
    startOffset () {
      return ((this.curPageNum - 1) * this.dataPerPage)
    },
    endOffset () {
      return (this.startOffset + this.dataPerPage)
    },
    numOfPages () {
      return Math.ceil(this.questionList.length / this.dataPerPage)
    },
    sliceData () {
    //   return this.questionList
      return this.questionList.slice(this.startOffset, this.endOffset)
    }
  }
}
</script>

<style scoped>
#questionVList {
  padding: 0;
}

.vListItem {
  padding-left: 0;
  border-bottom:1px solid grey;
}

.vListItem:hover {
  background: rgba(48, 74, 189, 0.17)!important;
}

#searchListPageApp {
  background-color: white;
}

.questionTitle {
  font-weight: bold;
  margin-bottom: 16px;
}

.questionContent {
  margin-bottom: 3px;
}

.answer--active {
  /* border: 1px solid #471e8f; */
  background-color: rgba(48, 74, 189, 0.87);
  color: white;
}

.answer--inactive {
  border: none;
}

.score {
  min-width: 4.5rem;
}

.score-sum-question {
  font-size: 1.3rem;
}

.viewScore {
  font-size: 0.7rem;
}

.status .viewScore {
  padding-bottom: 5px;
}

.score {
  text-align: center;
}

.status {
  text-align: center;
  margin: 5px 10px 0 10px;
}

.stats {
  margin: 5px 5px 5px 0px;
}

.userIcon {
  margin-right: 0.8vw;
}

.created_at {
  color: grey;
  font-size: 0.75em;
}

.writerName {
  color: black!important;
}

.writerName button{
  padding: 0!important;
  text-align: left!important;
}

.userArea {
  min-height: 72px;
}

.userArea:hover{
  background-color: rgba(48, 74, 189, 0.87);
}

.userArea:hover .created_at, .userArea:hover .writerName {
  color: white!important;
  font-weight: bold;
}
</style>
