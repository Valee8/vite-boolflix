<script>

import Card from './Card.vue'

import { store } from '../store.js';


export default {
    name: "ListCards",
    components: {
        Card
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <div v-for="(card, index) in store.cardsList" :key="index" class="card" v-if="store.cardsList.length != 0">
        <Card :info="card" />
    </div>

    <div v-else>
        Nessun risultato per la ricerca
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.card {
    width: calc(20% - 20px);
    margin: 10px;
    height: 250px;
    position: relative;
    overflow: hidden;
}
</style>