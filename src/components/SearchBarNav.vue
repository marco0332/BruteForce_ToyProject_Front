<template>
    <v-flex>
        <v-form @submit="mySubmit" style="color:white">
            <v-text-field class="mySearchBoxNav v-input--is-focused"
                dark
                append-icon="fa-search"
                v-model="searchText"
                hide-details
                placeholder="검색"
            ></v-text-field>
        </v-form>
    </v-flex>
</template>

<script>
export default {
  name: 'SearchBarNav',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    mySubmit () {
      this.$router.push('/searchList/' + this.searchText)
    }
  }
}
</script>

<style scoped>
  .v-label.theme--light {
    right: auto!important;
  }

  .v-label--active {
    font-weight: bold;
  }

  .mySearchBoxNav {
    border-radius: 7px;
    width: 50vw;
    margin:0 0 3px 0;
    padding:0;
  }
</style>
