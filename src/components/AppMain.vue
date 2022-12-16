<script>

import ListCards from './ListCards.vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)


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