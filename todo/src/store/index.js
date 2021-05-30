import {createStore} from 'vuex'

const store = createStore({
    state : {
        currentJoke: "Nothing yet!",
        totalFetchedJokes : 0
    },
    mutations : {
        // synchronous
        setCurrentJoke(state,payload) {
            state.currentJoke = payload
        },
        setTotalFetchedJokes(state) {
            state.totalFetchedJokes++
        }
    },
    getters : {
        getCurrentJoke(state) {
            return state.currentJoke
        },
        getTotalFetchedJokes(state) {
            return state.totalFetchedJokes
        }
    },
    actions : {
        // can be async or should be async otherwise the job can be done via mutations as well
        async setCurrentJoke(state) {
            state.commit('setCurrentJoke','Fetching new joke...')
            const url = "https://official-joke-api.appspot.com/random_joke";
            const headers = { Accept: "application/json" };
            const response = await fetch(url,headers)
            const json = await response.json()
            const joke = json.setup + ' ' + json.punchline
            state.commit('setCurrentJoke',joke)
            state.commit('setTotalFetchedJokes')
        }
    }
})

export default store