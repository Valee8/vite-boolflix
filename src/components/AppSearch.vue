<script>

import { store } from '../store';


export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <div class="container">
        <form>
            <input type="search" placeholder="Cerca" v-model="store.searchText" class="input-search">
            <button type="submit" @click.prevent="$emit('search')" class="button-search">Invia</button>
        </form>
    </div>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

@use '../styles/partials/mixins' as *;

form>* {
    background-color: #ccc;
    padding: 5px;
    border-radius: 3px;
    border: 0;
    color: #000;
}

.button-search {
    margin-left: 5px;
    cursor: pointer;
}
</style>