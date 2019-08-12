<template>
    <v-app>
        <v-layout row ma-0 class="detailArea">
            <!-- profile Area -->
            <v-flex sm3 justify-center hidden-xs-only class="profileArea toFlex">
                <v-btn text class="userAreaDetail marginTop42">
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
            <v-flex class="contentsArea">
                <v-container>
                    right
                </v-container>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
export default {
  name: 'post',
  props: {
    item: {type: Object}
  },
  data () {
    return {
      avatarSize: window.innerWidth * 0.09,
      grades: [],
      colors: []
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
        this.avatarSize = window.innerWidth * 0.09
      })
    }
  }
}
</script>

<style scoped>
.detailArea {
  min-height: 30vh;
}

.profileArea {
  /* background-color: red; */
}

.contentsArea {
  /* background-color: blue; */
}

.writerName {
  font-size: 1.78vw;
  font-weight: bold;
}
</style>
