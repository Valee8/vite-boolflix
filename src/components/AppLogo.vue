<script>

export default {
    name: "AppLogo",
    data() {
        return {
            title: "Boolflix"
        }
    }
}

</script>

<template>

    <h1>
        {{ title }}
    </h1>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

h1 {
    color: red;
    text-transform: uppercase;
}
</style>