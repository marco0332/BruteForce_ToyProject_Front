<template>
  <v-app>
    <v-container>
        <v-flex>
            <editor v-model="mdText"></editor>
        </v-flex>
        <v-flex>
            <viewer :value="mdText"></viewer>
        </v-flex>
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

export default {
  name: 'writeQuestionPage',
  components: {
    'editor': Editor,
    'viewer': Viewer
  },
  data () {
    return {
      mdText: ''
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
