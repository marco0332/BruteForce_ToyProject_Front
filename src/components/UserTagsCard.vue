<template>
  <v-flex class="share-font" wrap xs4.5 style="margin-left: 2%; margin-right: 2%">
    <v-card outlined wrap max-width="500" max-height="300" class="mx-auto tag-card">
      <v-system-bar dark color="light-blue darken-1">
        <v-icon>fas fa-tags</v-icon>
        <v-spacer></v-spacer>
        <span class="system-bar">TAGS</span>
      </v-system-bar>
      <v-layout v-for="tag in userTags" :key="tag" wrap class="share-font mx-5 my-4">
        <span style="font-size: 1.4rem; margin: auto">{{tag}}</span>
        <v-spacer></v-spacer>
        <span style="color: darkgray; font-size: 1.1rem; margin: auto">{{tag}}</span>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'UserTagsCard',
  props: {
    userTags: {type: Array}
  }
}
</script>

<style scoped>
  .system-bar{
    font-family: 'Share Tech Mono', monospace;
  }
  .share-font {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1rem;
  }
  .tag-card {
    overflow: scroll;
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none !important;
  }
</style>
