<template>
  <v-app>
    <v-container>
      <editor :v-model="body" viewer: true></editor>
      <viewer :value="test"></viewer>
    </v-container>
  </v-app>
</template>

<script>
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'codemirror/lib/codemirror.css'
import 'highlight.js/styles/github.css'
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
      body: ''
    }
  }
}
</script>

<style scoped>

</style>
