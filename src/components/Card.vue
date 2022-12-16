<script>

export default {
    name: "Card",
    props: ["info"],
    data() {
        return {
            flags: [
                {
                    flag: 'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/16x16/plain/flag_italy.png',
                    text: 'it'
                },
                {
                    flag: 'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/16x16/plain/flag_france.png',
                    text: 'fr'
                },
                {
                    flag: 'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/16x16/plain/flag_england.png',
                    text: 'en'
                },
                {
                    flag: 'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/16x16/plain/flag_japan.png',
                    text: 'ja'
                },
                {
                    flag: 'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/16x16/plain/flag_germany.png',
                    text: 'de'
                },
                {
                    flag: 'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/16x16/plain/flag_spain.png',
                    text: 'es'
                },
                {
                    flag: 'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/16x16/plain/flag_portugal.png',
                    text: 'pt'
                },
                {
                    flag: 'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/16x16/plain/flag_poland.png',
                    text: 'pl'
                }
            ]
        }
    }
}
</script>

<template>

    <h2>
        Titolo: {{ info.title }}
    </h2>

    <h3>
        Titolo originale: {{ info.original_title }}
    </h3>

    <div class="lang" v-for="(icons, index) in flags" :key="index">
        <div v-if="info.original_language === icons.text">
            Lingua: <img :src="icons.flag" :title="info.original_language">
        </div>
    </div>

    <div class="vote">
        Voto: {{ info.vote_average }}
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>