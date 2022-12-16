<script>

export default {
    name: "Card",
    props: ["info"]
}
</script>

<template>

    <h2>
        Titolo: {{ info.title }}
    </h2>

    <h3>
        Titolo originale: {{ info.original_title }}
    </h3>

    <div class="lang">
        Lingua: {{ info.original_language }}
    </div>

    <div class="vote">
        Voto: {{ info.vote_average }}
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>