<template>
  <div>
      <input type="text" v-model="searchText" placeholder="アーティスト名">
      <input type="submit" @click="search">
      <p>v-model：{{searchText}}</p>
      <p>computed：{{fixSearchText}}</p>
      <p>watch：{{watchedSearchText}}</p>
      <p>State：{{searchTextState}}</p>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      searchText: '',
      watchedSearchText: ''
    }
  },
  //computedはマウント時に(変更前から)実行される(関数だけど値を返す)
  computed: {
    fixSearchText: function() {
      return this.searchText
    },
    searchTextState: function() {
      return this.$store.getters.searchTextGetter
    }
  },
  //watchは変更されてから実行される(関数)
  watch: {
    searchText:function(val) {
      this.watchedSearchText = val

      //searchTextが変更されるたびにsearchメソッドを実行する(インクリメント検索)
      this.search()
    }
  },
  methods: {
    search () {
      if (this.searchText !== '') {
        // console.log(this.searchText)
        // this.$emit('search', {
        //   'searchText': this.searchText
        // })
        eventHub.$emit('search',{
          'searchText': this.searchText
        });
        localStorage.setItem('searchText', this.searchText)
        this.searchText = localStorage.getItem('searchText')
        // console.log(localStorage.getItem('searchText'))
        this.$store.commit('searchTextStore',this.searchText)
      }
    }
  }
}
</script>
