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

    <div v-for="card in store.cardsList" :key="card.id" class="card">
        <Card :info="card" />
    </div>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>