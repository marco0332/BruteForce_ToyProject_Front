<template>
    <div id="homePageApp" class="backColorSetting">
        <v-container fill-height>
            <v-layout class="toFlex">
                <v-flex xs10 class="toFlex verticalCenter">
                    <v-layout column>
                        <span id="mainTitle">
                            BRUTE FORCE
                        </span>
                        <SearchBar />
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar'

export default {
  name: 'homePage',
  components: {
    SearchBar
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
