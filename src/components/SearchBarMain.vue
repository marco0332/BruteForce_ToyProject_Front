<template>
    <v-flex>
        <v-form @submit="mySubmit">
            <v-text-field class="mySearchBoxMain v-input--is-focused"
                outlined
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
  name: 'SearchBarMain',
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

<style>
  .v-label.theme--light {
    right: auto!important;
  }

  .v-label--active {
    font-weight: bold;
  }

  .mySearchBoxMain {
    background-color: white;
    border-radius: 7px;
    width: 80vw;
  }
</style>
