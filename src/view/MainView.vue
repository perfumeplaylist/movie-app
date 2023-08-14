<script setup lang="ts">
import { useMovieStore } from '~/store/movieList'
import MovieList from '~/components/MovieList.vue'
import PageNavigation from '~/components/PageNavigation.vue'

const movieStore = useMovieStore()
</script>
<template>
  <section class="common">
    <p class="sub__title txt">
      검색된 총 영화 개수 : {{ movieStore.totalMovieCount }}
    </p>
    <ul class="c-movie">
      <MovieList
        v-for="{ imdbID, Year, Poster, Title } of movieStore.movie"
        :key="imdbID"
        :movie="{ imdbID, Year, Poster, Title }"
        class="c-movie__item" />
    </ul>
    <div class="c-movie--bottom">
      <PageNavigation />
    </div>
  </section>
</template>
<style scoped lang="scss">
.txt {
  text-align: left;
}
.c-movie {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 4rem;
}
.c-movie__item {
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.c-movie__item:hover {
  transform: scale(1.1);
}
.c-movie--bottom {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
