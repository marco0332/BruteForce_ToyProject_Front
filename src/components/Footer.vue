<template>
    <v-layout align-center id='Footer' class="backColorSetting toFlex">
        <v-flex class="toFlex verticalCenter">
            <p>
                <span style="font-size:0.8em">Made by&nbsp;
                    <a href="https://github.com/ddoromi" target="_blank" class="linkToGit">권성령</a>&nbsp;
                    <a href="https://github.com/sksms17456" target="_blank" class="linkToGit">박현빈</a>&nbsp;
                    <a href="https://github.com/marco0332" target="_blank" class="linkToGit">이기인</a>&nbsp;
                    <a href="https://github.com/JHI93" target="_blank" class="linkToGit">정해인</a>&nbsp;
                    <a href="https://github.com/hyeonincho" target="_blank" class="linkToGit">조현인</a>
                </span>
                <br/>
                <span style="color:rgb(235,235,235,0.3)">Team Seoul 16 _ SSAFY</span>
            </p>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#Footer {
  margin:0;
  padding:0;
  width: 100vw;
  height: 64px;
  text-align:center;
  color: white;
}

.linkToGit {
    text-decoration: none;
    color:white;
}

.linkToGit:hover {
    text-shadow: 1px 1px 5px white;
}
</style>
