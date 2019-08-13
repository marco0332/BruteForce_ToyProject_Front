<template>
    <v-app id="postPage">
        <v-layout row ma-0 class="detailArea">
            <!-- profile Area Desktop -->
            <v-flex sm3 justify-center hidden-xs-only class="profileArea toFlex">
                <v-btn text class="userAreaDetail marginY5">
                    <v-container>
                        <v-layout justify-center class="">
                            <!-- User Img -->
                            <v-avatar
                                color="indigo"
                                :size="avatarSize"
                            >
                                <v-icon dark class="emptyUserBigger" v-if="item.photoURL === ''">account_circle</v-icon>
                                <img v-else :src="item.photoURL" :alt="item.writerName">
                            </v-avatar>
                        </v-layout>
                        <v-layout align-center column class="marginTop5">
                            <v-flex class="writerName">{{item.writerName}}</v-flex>
                            <v-flex class="created_at marginTop5">{{item.timestamp}}</v-flex>
                            <v-chip class="marginTop30 share-font mx-5 gradeChip" label size="5" :color="colors[item.writerGrade]" text-color="white">{{grades[item.writerGrade]}}</v-chip>
                        </v-layout>
                    </v-container>
                </v-btn>
            </v-flex>

            <!-- Contents Area -->
            <v-flex sm8 class="contentsArea">
                <v-container>
                    <viewer :value="item.contents" />
                </v-container>
            </v-flex>
        </v-layout>
        <!-- Mobile Profile Area -->
        <v-layout ma-0 hidden-sm-and-up class="detailArea">
            <v-flex sm3 justify-end class="profileArea toFlex">
                <v-btn text class="userAreaDetailMobile marginY5">
                    <v-container row>
                        <v-layout justify-center class="">
                            <!-- User Img -->
                            <v-avatar
                                color="indigo"
                                :size="avatarSize"
                            >
                                <v-icon dark class="emptyUserBigger" v-if="item.photoURL === ''">account_circle</v-icon>
                                <img v-else :src="item.photoURL" :alt="item.writerName">
                            </v-avatar>
                        </v-layout>
                        <v-layout align-center column class="marginTop5">
                            <v-flex class="writerName">{{item.writerName}}</v-flex>
                            <v-flex class="created_at marginTop5">{{item.timestamp}}</v-flex>
                            <v-chip class="marginTop30 share-font mx-5 gradeChip" label size="5" :color="colors[item.writerGrade]" text-color="white">{{grades[item.writerGrade]}}</v-chip>
                        </v-layout>
                    </v-container>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'codemirror/lib/codemirror.css'
import 'highlight.js/styles/Vs2015.css'
import Viewer from '@toast-ui/vue-editor/src/Viewer.vue'

export default {
  name: 'post',
  props: {
    item: {type: Object}
  },
  components: {
    'viewer': Viewer
  },
  data () {
    return {
      avatarSize: window.innerWidth * 0.045 + window.innerHeight * 0.09,
      grades: [],
      colors: [],
    }
  },
  mounted () {
    this.setAvatarSize()
  },
  created () {
    this.dataInit()
  },
  methods: {
    dataInit () {
      this.grades = ['IRON', 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND', 'MASTER', 'CHALLENGER']
      this.colors = ['#4a4433', '#c7a238', '#c7c7c7', '#fae84b', '#3e66f7', '#00fffb', '#a027d9', '#f2273f']
    },
    setAvatarSize () {
      window.addEventListener('resize', () => {
        this.avatarSize = window.innerWidth * 0.045 + window.innerHeight * 0.09
      })
    }
  }
}
</script>

<style scoped>
#postPage {
  background-color: white;
  margin-top: 25px;
}
</style>
