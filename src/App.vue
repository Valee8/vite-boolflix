<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  name: "App",
  components: {
    AppMain,
    AppHeader
  }
}
</script>

<template>

  <AppHeader />

  <main>

    <AppMain />

  </main>

</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;

.card:hover .text-card {
  display: block;
}
</style>
