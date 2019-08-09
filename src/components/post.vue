<template>
    <v-app>
        <v-layout row ma-0 class="detailArea">
            <!-- profile Area -->
            <v-flex xs3 class="profileArea">
                <v-container>
                    <v-layout justify-center class="userProfile">
                        <!-- User Img -->
                        <v-avatar
                            color="indigo"
                            :size="avatarSize"
                        >
                            <v-icon dark class="empthUser" v-if="item.photoURL === ''">account_circle</v-icon>
                            <img v-else :src="item.photoURL" :alt="item.writerName">
                        </v-avatar>
                    </v-layout>
                </v-container>
            </v-flex>

            <!-- Contents Area -->
            <v-flex class="contentsArea">
                <v-container>
                    right
                </v-container>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'post',
  props: {
    item: {type: Object}
  },
  data () {
    return {
      avatarSize: 54
    }
  },
  mounted () {
    this.setAvatarSize()
  },
  methods: {
    setAvatarSize () {
    //   this.avatarSize = $(window).width() * 0.15
      this.avatarSize = window.screen.width * 0.15
      console.log(this.avatarSize)
    }
  }
}
</script>

<style scoped>
.detailArea {
  min-height: 30vh;
}

.profileArea {
  background-color: red;
}

.contentsArea {
  background-color: blue;
}

.userProfile {
  /* text-align: center; */
}
</style>
