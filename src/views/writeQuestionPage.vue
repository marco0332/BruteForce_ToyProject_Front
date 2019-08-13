<template>
  <v-app>
    <v-container id="writeQuestionPage" justify-center align-center class="my-8 mx-auto">
      <v-text-field v-model="title" hint="제목을 입력하세요" label="Title"></v-text-field>
      <v-text-field v-model="tags" hint="태그을 입력하세요" label="Tags (ex. java python c#)"></v-text-field>
      <editor class="my-8" v-model="body" ></editor>
      <v-layout justify-center align-center>
        <v-btn class="my-8" @click="postQuestion" color="light-blue darken-4" dark>CREATE&nbsp;<v-icon>mdi-pencil-plus-outline</v-icon></v-btn>
        &nbsp; &nbsp;
        <v-btn class="my-8" @click="goBack" color="red darken-1" dark>CANCEL&nbsp;<v-icon>mdi-undo</v-icon></v-btn>
      </v-layout>
<!--      <viewer :value="body"></viewer>-->
    </v-container>
  </v-app>
</template>

<script>
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'codemirror/lib/codemirror.css'
import 'highlight.js/styles/Vs2015.css'
import Viewer from '@toast-ui/vue-editor/src/Viewer.vue'
import Editor from '@toast-ui/vue-editor/src/Editor.vue'
import router from '../router/index'

export default {
  name: 'writeQuestionPage',
  components: {
    'editor': Editor,
    'viewer': Viewer
  },
  data () {
    return {
      title: '',
      body: '',
      tags: '',
      tagList: []
    }
  },
  methods: {
    postQuestion () {
      this.tagList = this.tag.split(' ')
    },
    goBack () {
      router.go(-1)
    }
  }
}
</script>

<style>
  .tui-editor-contents pre {
    background-color: rgb(30, 30, 30);
  }
  .tui-editor-contents pre code {
    padding: 10px 5px!important;
    box-shadow: none;
    color: rgb(220, 220, 220);
  }
</style>
