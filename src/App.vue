<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'

import axios from 'axios';

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
  },
  methods: {
    getFilms() {
      let myUrl = store.apiURL;
      axios
        .get(myUrl)
        .then(res => {
          store.cardsList = res.data.results;
        })
        .catch(error => {
          console.log("Errori: ", error);
        });
    }
  },
  mounted() {
    this.getFilms();
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
