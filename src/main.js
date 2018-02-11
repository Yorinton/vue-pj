// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Results from './components/Results'
import SearchBar from './components/SearchBar'
import router from './router'
import store from './store'
// axiosインポート
import axios from 'axios'

Vue.config.productionTip = false
// グローバルにコンポーネントを登録
Vue.component('results', Results)
Vue.component('search-bar', SearchBar)

const eventHub = global.eventHub = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  data: {
    items: [],
    searchText: ""
  },
  created () {
    eventHub.$on('search',(val) => {
      const searchUrl = `https://itunes.apple.com/search?country=JP&media=music&limit=10&term=${val.searchText}`
      axios.get(searchUrl).then((res) => {
        console.log(res.data.results[0])
        this.items = res.data.results
      })
    })
  },
  mounted() {
    console.log(store.state.searchText)
  }

})
