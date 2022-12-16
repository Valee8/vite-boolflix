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

    <div class="vote">
        Voto: {{ info.vote_average }}
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>