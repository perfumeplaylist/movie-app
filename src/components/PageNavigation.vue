<script setup lang="ts">
import TheIcon from './TheIcon.vue'
import { useMovieStore } from '~/store/movieList'

const movieStore = useMovieStore()
async function movePage($event: MouseEvent) {
  const target = $event.target
  if (target instanceof HTMLElement) {
    if (target.innerText === 'arrow_forward_ios') {
      await movieStore.searchMoive({
        title: movieStore.searchKeyword,
        page: movieStore.currentPage + 1
      })
    } else {
      await movieStore.searchMoive({
        title: movieStore.searchKeyword,
        page: movieStore.currentPage - 1
      })
    }
  }
}
</script>
<template>
  <TheIcon
    data-arrow="left"
    :v-if="movieStore.currentPage !== 1"
    @click="movePage"
    >arrow_back_ios</TheIcon
  >
  <p class="page__description">
    {{ movieStore.currentPage }} / {{ movieStore.totalPage }}
  </p>
  <TheIcon
    data-arrow="right"
    :v-if="movieStore.currentPage !== movieStore.totalPage"
    @click="movePage"
    >arrow_forward_ios</TheIcon
  >
</template>
<style scoped lang="scss">
.page__description {
  margin: 0 0.3rem;
}
</style>
