<script>

export default {
    name: "Card",
    props: ["info"]
}
</script>

<template>

    <h2>
        {{ info.title }}
    </h2>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>