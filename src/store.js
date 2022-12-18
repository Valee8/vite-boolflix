import { reactive } from 'vue'

export const store = reactive({
    cardsList: [],
    apiURL: "https://api.themoviedb.org/3/search/",
    apiKey: "api_key=a13e0fd79cfa1dd9f0f1686cc7c31b44",
    searchText: '',
});