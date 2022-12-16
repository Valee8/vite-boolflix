<script>

import ListCards from './ListCards.vue'


export default {
    name: "AppMain",
    components: {
        ListCards
    },
    data() {
        return {
        }
    }
}

</script>

<template>

    <ListCards />

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>