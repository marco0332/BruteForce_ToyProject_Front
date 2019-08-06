<template>
  <v-container id="userPageApp" grid-list-md text-center>
    <v-layout wrap>
      <v-flex xs3 style="margin-top: 5%">
        <v-card class="mx-auto">
          <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
          </v-img>
          <v-card-title>{{ userName }}</v-card-title>
          <v-card-text>{{ userEmail }}</v-card-text>
          <v-card-text>{{ userInfo }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>fas fa-cog</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs9>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'UserPage',
  props: {
    userName: {type: String},
    userId: {type: String}
  }
}
</script>

<style scoped>
#userPageApp {
  height: calc(100vh - 128px); /* nav_64px, footer_64px */
}
</style>
