<template>
    <v-form>
        <v-text-field class="mySearchBox v-input--is-focused"
            outlined
            append-icon="fa-search"
            v-model="searchText"
            hide-details
            placeholder="Search"
        ></v-text-field>
    </v-form>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      searchText: ''
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
}
</style>
