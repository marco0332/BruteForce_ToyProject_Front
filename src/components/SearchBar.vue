<template>
    <v-form>
        <v-text-field
            outlined
            label="Search"
            append-icon="fa-search"
            v-model="searchText"
            hide-details
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
