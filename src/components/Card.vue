<script>

import axios from 'axios';

export default {
    name: "Card",
    props: ["info"],
    data() {
        return {
            actors: '',
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
        // Funzione per far comparire bandiera a seconda della lingua
        getFlag() {

            for (let i = 0; i < this.flags.length; i++) {
                if (this.info.original_language === this.flags[i].text) {

                    return this.flags[i].flag

                }
            }

            // Se non presente in nell'array flags compare quella arcobaleno
            return this.flags[this.flags.length - 1].flag

        },
        // Funzione per far comparire immagine copertina
        getPath() {
            if (this.info.poster_path) {
                return "https://image.tmdb.org/t/p/w342/" + this.info.poster_path
            }
            // Se non presente compare quest'altra
            else {
                return "/img/copertina-non-disponibile.jpg"
            }
        },
        // Funzione per far comparire il titolo del film/serie tv
        getTitle() {
            if (this.info.title) {
                return this.info.title
            }
            else {
                return this.info.name
            }
        },
        // Funzione per far comparire il titolo originale del film/serie tv
        getOriginalTitle() {
            if (this.info.original_title) {
                return this.info.original_title
            }
            else {
                return this.info.original_name
            }
        },
        // Funzione per far comparire l'overview
        getOverview() {
            if (this.info.overview) {
                return this.info.overview
            }
            else {
                return "Non presente"
            }
        },
        // Funzione per far comparire i nomi degli attori
        getNames() {
            return this.actors
        }
    },
    // Per richiamare getActors e aggiornare gli attori in caso di ricerca
    watch: {
        info() {
            this.getActors();
        }

    },
    methods: {
        // Funzione per generare nomi attori
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

                    this.actors = "";

                    for (let i = 0; i < 5; i++) {
                        this.actors += `${res.data.cast[i].name}, `;
                    }

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

    <!-- Immagine copertina -->
    <img :src="getPath" class="path" :alt="info.title ? info.title : info.name">

    <!-- Inizio info card -->
    <ul class="text-card">
        <!-- Titolo -->
        <li>
            <h3>
                <span class="info">
                    Titolo:
                </span> {{ getTitle }}
            </h3>
        </li>

        <!-- Titolo originale - compare se diverso dal titolo -->
        <li v-if="info.original_title != info.title || info.original_name != info.name">
            <h4>
                <span class="info">
                    Titolo originale:
                </span> {{ getOriginalTitle }}
            </h4>
        </li>

        <!-- Lingua con bandiera -->
        <li class="lang">
            <span class="info">
                Lingua:
            </span>
            <img :src="getFlag" :alt="info.original_language" class="flag" v-if="info.original_language">

            <span class="info" v-else> Non presente</span>
        </li>

        <!-- Voto con stelle al posto del voto -->
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

        <!-- Nomi attori -->
        <li v-if="actors.length != 0">
            <span class="info">
                Attori:
            </span>{{ getNames }}
        </li>

        <!-- Overview -->
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