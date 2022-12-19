<script>
export default {
    name: "Card",
    props: ["info"],
    data() {
        return {
            int: parseInt(Math.round(this.info.vote_average) / 2),
            numMaxStars: 5,
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

        },
        getPath() {
            if (this.info.poster_path) {
                return "https://image.tmdb.org/t/p/w342/" + this.info.poster_path
            }
            else {
                return "/img/copertina-non-disponibile.jpg"
            }
        },
        getTitle() {
            if (this.info.title) {
                return this.info.title
            }
            else {
                return this.info.name
            }
        },
        getOriginalTitle() {
            if (this.info.original_title) {
                return this.info.original_title
            }
            else {
                return this.info.original_name
            }
        },
        getOverview() {
            if (this.info.overview) {
                return this.info.overview
            }
            else {
                return "Non presente"
            }
        }
    }
}
</script>

<template>

    <img :src="getPath" class="path">

    <div class="text-card">
        <h2>
            <span class="title">
                Titolo:
            </span>
            {{ getTitle }}
        </h2>

        <h3 v-if="info.original_title != info.title || info.original_name != info.name">
            <span class="title">
                Titolo originale:
            </span>{{ getOriginalTitle }}
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
                <span v-for="stars in numMaxStars - int">
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
            {{ getOverview }}
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