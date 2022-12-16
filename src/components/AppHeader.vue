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
                myUrl += `&query=${store.searchText}`;

                console.log(myUrl);
            }

            else {
                myUrl += "&query=?";
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
        <AppSearch @search="getFilms" />
    </header>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>