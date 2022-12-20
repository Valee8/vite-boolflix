<script>

import axios from 'axios';

import { store } from '../store.js';

export default {
    name: "Card",
    props: ["info"],
    data() {
        return {
            store,
            actors: '',
            id: '',
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
        },
        getNames() {
            return this.actors
        }
    },
    methods: {
        getActors() {

            let urlActors;

            if (this.info.title) {
                urlActors = `https://api.themoviedb.org/3/movie/${this.info.id}/credits?api_key=a13e0fd79cfa1dd9f0f1686cc7c31b44`;
            }
            else {
                urlActors = `https://api.themoviedb.org/3/tv/${this.info.id}/credits?api_key=a13e0fd79cfa1dd9f0f1686cc7c31b44`;
            }

            axios
                .get(urlActors)
                .then(res => {

                    for (let i = 0; i < 5; i++) {
                        this.actors += `${res.data.cast[i].name}, `;

                    }

                    this.id = res.data.id;


                })
                .catch(error => {
                    console.log("Errori: ", error);
                });
        }
    },
    mounted() {
        this.getActors();
    }
}
</script>

<template>

    <img :src="getPath" class="path">

    <ul class="text-card">
        <li>
            <h3>
                <span class="info">
                    Titolo:
                </span> {{ getTitle }}
            </h3>
        </li>

        <li v-if="info.original_title != info.title || info.original_name != info.name">
            <h4>
                <span class="info">
                    Titolo originale:
                </span> {{ getOriginalTitle }}
            </h4>
        </li>

        <li class="lang">
            <span class="info">
                Lingua:
            </span>
            <img :src="getFlag" :alt="info.original_language" class="flag" v-if="info.original_language">

            <span class="info" v-else> Non presente</span>
        </li>


        <li class="vote">
            <span class="info">
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
        </li>

        <li v-if="id === info.id">
            <span class="info">
                Attori:
            </span>{{ getNames }}
        </li>

        <li class="overview">
            <span class="info">
                Overview:
            </span> {{ getOverview }}
        </li>
    </ul>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.path {
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
}

.text-card {
    list-style-type: none;
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
    font-size: 0.8rem;

    li {
        padding: 2px;

        h3,
        h4 {
            font-size: 0.8rem;
            font-weight: normal;
        }

        .info {
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

}
</style>