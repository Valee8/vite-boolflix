<script>

import AppSearch from './AppSearch.vue'
import AppLogo from './AppLogo.vue'

import { store } from '../store.js';



export default {
    name: "AppHeader",
    components: {
        AppSearch,
        AppLogo
    },
    data() {
        return {
        }
    }
}

</script>

<template>

    <header>
        <h1>
            AppHeader
        </h1>
    </header>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>