<script>
export default {
    name: "Card",
    props: ["info"],
    data() {
        return {
            int: parseInt(Math.round(this.info.vote_average) / 2),
            flags: [
                {
                    flag: '/img/italy-flag.png',
                    text: 'it'
                },
                {
                    flag: '/img/france-flag.png',
                    text: 'fr'
                },
                {
                    flag: '/img/england-flag.png',
                    text: 'en'
                },
                {
                    flag: '/img/japan-flag.png',
                    text: 'ja'
                },
                {
                    flag: '/img/germany-flag.png',
                    text: 'de'
                },
                {
                    flag: '/img/spain-flag.png',
                    text: 'es'
                },
                {
                    flag: '/img/portugal-flag.png',
                    text: 'pt'
                },
                {
                    flag: '/img/poland-flag.png',
                    text: 'pl'
                }
            ]
        }
    },
    computed: {
        getFlag() {

            for (let i = 0; i < this.flags.length; i++) {
                if (this.info.original_language === this.flags[i].text) {

                    return this.flags[i].flag

                }
            }

        }
    }
}
</script>

<template>

    <img v-if="info.poster_path" :src="'https://image.tmdb.org/t/p/w342/' + info.poster_path"
        :alt="info.title ? info.title : info.name">

    <h2 v-if="info.title">
        Titolo: {{ info.title }}
    </h2>

    <h2 v-else>
        Nome: {{ info.name }}
    </h2>

    <h3 v-if="info.original_title">
        Titolo originale: {{ info.original_title }}
    </h3>

    <h3 v-else>
        Nome originale: {{ info.original_name }}
    </h3>

    Lingua: <img :src="getFlag" :alt="info.original_language">

    <div class="vote" v-if="info.vote_average">
        Voto: {{ info.vote_average }}
        <div v-for="stars in int">
            <font-awesome-icon icon="fa-solid fa-star" />
        </div>
        <div v-for="stars in 5 - int">
            <font-awesome-icon icon="fa-regular fa-star" />
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>