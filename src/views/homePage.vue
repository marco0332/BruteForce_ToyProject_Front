<template>
    <div id="homePageApp" class="backColorSetting">
        <v-container fill-height>
            <v-layout class="toFlex">
                <v-flex xs10 class="toFlex verticalCenter" style="margin:auto">
                    <v-layout column style="text-align:center;">
                        <span id="mainTitle">
                            BRUTE FORCE
                        </span>
                        <SearchBarMain />
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import SearchBarMain from '../components/SearchBarMain'

export default {
  name: 'homePage',
  components: {
    SearchBarMain
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#homePageApp {
    height: calc(100vh - 128px); /* nav_64px, footer_64px */
    background-color: transparent;
}
</style>
