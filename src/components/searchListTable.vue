<template>
    <v-app id="searchListPageApp">
        <v-list two-line id="questionVList">

            <v-list-item
                v-for="(item, index) in sliceData"
                :key="index"
                @click="goToDetail(item)"

                style="border-bottom:1px solid grey"
            >
                <v-list-item-avatar>
                    <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.contents"></v-list-item-subtitle>
                </v-list-item-content>

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
    // this.getQuestionList()
    this.testQuestionList()
  },
  methods: {
    testQuestionList () {
        this.questionList = this.$axios.get('/api/findAllQuestions');
    },
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
          contents: 'Vue.js가 너무 어렵다니까요 ㅠㅠ',
          writerUid: 'user2',
          writerName: '이계인',
          tag: ['Vue.js', 'Javascript', 'Front-end'],
          bClosed: false,
          timestamp: new Date().getTime(),
          score: Number(0),
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
          cntAnswer: 1
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
          cntAnswer: 4
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
      return this.questionList.slice(this.startOffset, this.endOffset)
    }
  }
}
</script>

<style scoped>
#questionVList {
  padding: 0;
}

#searchListPageApp {
    background-color: white;
}
</style>
