<script>
export default {
    name: "Card",
    props: ["info"],
    data() {
        return {
            image: '',
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

        <h3 v-else-if="info.original_original && info.original_title != info.title">
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


        <div class="vote" v-if="info.vote_average">
            <span class="title">
                Voto:
            </span>
            <div v-for="stars in int">
                <font-awesome-icon icon="fa-solid fa-star" class="star" />
            </div>
            <div v-for="stars in 5 - int">
                <font-awesome-icon icon="fa-regular fa-star" class="star " />
            </div>
        </div>

        <div v-else>
            <span class="title">
                Voto non disponibile
            </span>
        </div>

        <div class="overview">
            {{ info.overview }}
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.path {
    height: 250px;
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
    }

    .vote {
        display: flex;

        .title {
            padding-right: 3px;
        }

        .star {
            color: #FFBD00;
            font-size: 0.9rem;
        }
    }
}
</style>