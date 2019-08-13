<template>
    <v-flex>
        <v-form @submit="mySubmit" style="color:white;">
            <v-text-field class="mySearchBoxMain v-input--is-focused"
                dark
                append-icon="fa-search"
                v-model="searchText"
                hide-details
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
    /* background-color: white; */
    border-radius: 7px;
    width: inherit;
    font-size: 1.6rem;
  }

  .mySearchBoxMain .v-text-field__slot {
    margin-bottom: 2px;
  }
</style>
