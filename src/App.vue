<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'

import { store } from './store.js';


export default {
  name: "App",
  components: {
    AppMain,
    AppHeader
  },
  data() {
    return {
      store,
    }
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
</style>
