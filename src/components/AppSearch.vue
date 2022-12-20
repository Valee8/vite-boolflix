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
            <input type="search" placeholder="Cerca una serie TV o un film" v-model="store.searchText"
                class="input-search">
            <button type="submit" @click.prevent="$emit('search')" class="button-search">Cerca</button>
        </form>
    </div>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

@use '../styles/partials/mixins' as *;

form>* {
    background-color: #ccc;
    border-radius: 3px;
    border: 0;
    color: #000;
}

.input-search {
    width: 190px;
    padding: 6px 0 5px 5px;
}

.button-search {
    margin-left: 5px;
    cursor: pointer;
    padding: 5px;
}
</style>