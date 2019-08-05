<template>
    <v-flex>
        <v-form @submit="mySubmit">
            <v-text-field class="mySearchBox v-input--is-focused"
                outlined
                append-icon="fa-search"
                v-model="searchText"
                hide-details
                placeholder="Search"
            ></v-text-field>
        </v-form>
    </v-flex>
</template>

<script>
export default {
  name: 'SearchBar',
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

  .mySearchBox {
    background-color: white;
    border-radius: 7px;
    width: 50vw;
  }
</style>
