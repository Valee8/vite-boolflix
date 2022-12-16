<script>

import { store } from '../store';


export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <div class="container">
        <form>
            <input type="search" placeholder="Cerca">
            <button type="submit">Invia</button>
        </form>
    </div>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>