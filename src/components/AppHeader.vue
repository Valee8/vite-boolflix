<script>

import AppSearch from './AppSearch.vue'

import AppLogo from './AppLogo.vue'

import axios from 'axios';

import { store } from '../store.js';


export default {
    name: "AppHeader",
    components: {
        AppSearch,
        AppLogo
    },
    data() {
        return {
            store,
            myUrl: '',
            title: '',
        }
    },
    methods: {
        getCards() {

            this.myUrl = store.apiURL;

            if (store.searchText != "") {
                this.myUrl += `search/multi?${store.apiKey}&query=${store.searchText}`;
            }
            else {
                this.myUrl += `trending/all/week?${store.apiKey}`;
            }

            axios
                .get(this.myUrl)
                .then(res => {
                    store.cardsList = res.data.results;
                })
                .catch(error => {
                    console.log("Errori: ", error);
                });
        }
    },
    computed: {
        getTitle() {

            if (!this.myUrl.includes("search")) {
                this.title = "Trending";
            }
            else {
                this.title = "Results";
            }

            return this.title;
        }
    },
    mounted() {
        this.getCards();
    }
}

</script>

<template>

    <header>
        <nav>
            <div class="container">
                <div class="logo">
                    <AppLogo />
                </div>

                <div class="search">
                    <AppSearch @search="getCards" />
                </div>
            </div>
        </nav>

        <div class="container title">
            <h2>
                {{ getTitle }}
            </h2>
        </div>
    </header>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

nav {
    background-color: #000;
    height: 80px;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
}
</style>