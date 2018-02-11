import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        searchText:""
    },
    mutations: {
        searchTextStore(state,searchText){
            state.searchText = searchText
            }
    },
    getters:{
        searchTextGetter: (state) => {
            return state.searchText.slice(2,7)
        }
    }
})

export default store
