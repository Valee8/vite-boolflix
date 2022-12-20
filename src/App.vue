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

h2 {
  font-size: 2.5rem;
}

.container.title {
  height: 80px;
  line-height: 80px;
}

main {
  height: calc(100vh - 160px);
  overflow: hidden;
  padding-bottom: 20px;

  .overflow {
    overflow-x: auto;
    height: 100%;
  }
}
</style>
