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

    <div class="overflow">
      <AppMain />
    </div>

  </main>

</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;

.card:hover .text-card {
  display: block;
}

main {
  height: calc(100vh - 80px);
  overflow: hidden;

  .overflow {
    overflow-x: auto;
    height: 100%;
  }
}
</style>
