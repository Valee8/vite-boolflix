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
        }
    },
    methods: {
        getFilms() {

            let myUrl = store.apiURL;

            if (store.searchText != "") {
                myUrl += `search/multi?${store.apiKey}&query=${store.searchText}`;

            }

            else {
                myUrl += `trending/all/week?${store.apiKey}`;
            }

            axios
                .get(myUrl)
                .then(res => {
                    store.cardsList = res.data.results;
                })
                .catch(error => {
                    console.log("Errori: ", error);
                });
        }
    },
    mounted() {
        this.getFilms();
    }
}

</script>

<template>

    <header>
        <div class="container">
            <div class="logo">
                <AppLogo />
            </div>

            <div class="search">
                <AppSearch @search="getFilms" />
            </div>
        </div>
    </header>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

header {
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