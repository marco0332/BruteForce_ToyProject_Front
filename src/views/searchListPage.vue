<template>
    <div id="searchListPageApp">
        <v-container id="contentsArea">

            <v-layout id="subHeader">
                <v-flex row>
                    <p id="keyword">'{{query}}'</p><p>에 대한 검색 결과</p>
                </v-flex>
                <v-spacer></v-spacer>
                <v-btn text id="addQuestionBtn" to="/questionDetailPage/1">
                    <v-icon>far fa-edit</v-icon>
                    <span>&nbsp;질문하기</span>
                </v-btn>
            </v-layout>

            <!-- TODO : Order -->
            <!-- <v-layout id="orderRule">
                <v-spacer />
                <v-flex class="toFlex orderRuleContent">
                    <span>관련도순</span>
                </v-flex>
                <v-flex class="toFlex orderRuleContent">
                    <span>최신순</span>
                </v-flex>
            </v-layout> -->

            <hr style="border-top:1px solid grey" />
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

#orderRule {
  margin: 30px 0 0px 0px;
  text-align: right;
}

#keyword {
  font-weight: bold;
  font-size: 1.9rem;
  min-width:106px;
  margin-left: 10px;
}

.orderRuleContent {
  font-size: 1.2rem;
  min-width: 70px;
}
#addQuestionBtn {
    color:#360d7e;
    border-bottom: 1.2px solid #471e8f;
}
#addQuestionBtn:hover {
    background-color: #0a07d81a;
}
</style>
