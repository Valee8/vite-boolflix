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

    <div class="container">
        <ListCards />
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.container {
    display: flex;
    flex-wrap: wrap;
}
</style>