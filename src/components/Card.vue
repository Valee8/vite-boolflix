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
                },
                {
                    flag: '/img/no-flag.png',
                    text: 'no-flag'
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

            return this.flags[this.flags.length - 1].flag

        }
    }
}
</script>

<template>

    <img :src="'https://image.tmdb.org/t/p/w342/' + info.poster_path" :alt="info.title ? info.title : info.name"
        class="path">

    <div class="text-card">
        <h2 v-if="info.title">
            <span class="title">
                Titolo:
            </span> {{ info.title }}
        </h2>

        <h2 v-else>
            <span class="title">
                Nome:
            </span> {{ info.name }}
        </h2>

        <h3 v-if="info.original_title && info.original_title != info.title">
            <span class="title">
                Titolo originale:
            </span>{{ info.original_title }}
        </h3>

        <h3 v-else-if="info.original_name && info.original_name != info.name">
            <span class="title">
                Nome originale:
            </span>{{ info.original_name }}
        </h3>

        <div class="lang">
            <span class="title">
                Lingua:
            </span>
            <img :src="getFlag" :alt="info.original_language" class="flag" v-if="info.original_language">

            <span class="title" v-else> Non presente</span>
        </div>


        <div class="vote">
            <span class="title">
                Voto:
            </span>
            <span v-if="info.vote_average" class="stars">
                <span v-for="stars in int">
                    <font-awesome-icon icon="fa-solid fa-star" class="star" />
                </span>
                <span v-for="stars in 5 - int">
                    <font-awesome-icon icon="fa-regular fa-star" class="star " />
                </span>
            </span>

            <span v-else>
                non disponibile
            </span>
        </div>

        <div class="overview">
            <span class="title">
                Overview:
            </span>
            <span v-if="info.overview">
                {{ info.overview }}
            </span>

            <span v-else>
                non presente
            </span>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.path {
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
}

.text-card {

    background-color: #000;
    color: #fff;
    position: absolute;
    top: 1px;
    left: 1px;
    display: none;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    overflow-y: auto;
    padding: 10px;

    &>* {

        font-size: 0.8rem;
        padding: 2px;

    }


    h2 {
        font-weight: normal;
    }

    h3 {
        font-weight: normal;
    }

    .title {
        font-weight: bold;
    }

    .flag {
        width: 19px;
        height: 13px;
        vertical-align: middle;
    }

    .star {
        color: #FFBD00;
        font-size: 0.9rem;
    }

}
</style>