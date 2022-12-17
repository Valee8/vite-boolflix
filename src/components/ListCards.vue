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

    <div v-for="card in store.cardsList" :key="card.id" :class="card.poster_path ? 'card' : 'card-no-path'">
        <Card :info="card" />
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.card {
    width: calc(20% - 20px);
    margin: 10px;
}

.card-no-path {
    display: none;
}
</style>