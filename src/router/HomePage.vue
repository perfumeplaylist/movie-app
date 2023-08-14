<script setup lang="ts">
import { useMovieStore } from '~/store/movieList'
import HeaderView from '~/view/HeaderView.vue'
import MainView from '~/view/MainView.vue'
import TheLoading from '~/components/TheLoading.vue'

const movieStore = useMovieStore()
</script>

<template>
  <TheLoading v-if="movieStore.loading" />
  <section class="mx-center">
    <HeaderView />
    <MainView v-if="movieStore.movie.length" />
    <RouterView />
  </section>
</template>
