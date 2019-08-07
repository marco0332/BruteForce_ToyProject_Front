<template>
    <div id="searchListPageApp">
        <v-container id="contentsArea">

            <v-layout id="subHeader">
                <h2>검색 결과</h2>
                <v-spacer></v-spacer>
                <v-btn text id="addQuestionBtn" to="/questionDetailPage/1">
                    <v-icon>far fa-edit</v-icon>
                    <span>&nbsp;질문하기</span>
                </v-btn>
            </v-layout>

            <v-layout id="searchKeyword">
                <span id="keyword">'{{query}}'</span><span>에 대한 검색 결과</span>
            </v-layout>

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

#searchKeyword {
  margin: 30px 0 50px 0px;
}

#keyword {
  font-weight: bold;
}

#addQuestionBtn {
    color:#360d7e;
    border-bottom: 1.2px solid #471e8f;
}
#addQuestionBtn:hover {
    background-color: #0a07d81a;
}
</style>
