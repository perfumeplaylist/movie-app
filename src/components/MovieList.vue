<script setup lang="ts">
import { MovieProps } from '~/type/movie.ts'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const list = ref(HTMLElement)
defineProps<{ movie: MovieProps }>()

function moveRouter() {
  if (list.value instanceof HTMLElement && list.value.tagName === 'LI') {
    const id = list.value.dataset.imageid
    router.push(`/detail/${id}`)
  }
}
</script>
<template>
  <li
    ref="list"
    :data-imageId="movie.imdbID"
    @click="moveRouter">
    <img
      class="movie__poster"
      :src="movie.Poster === 'N/A' ? '/no_image.jpeg' : movie.Poster"
      alt="movieImage" />
    <p class="movie__description">{{ movie.Title }} / {{ movie.Year }}</p>
  </li>
</template>
<style scoped lang="scss">
.movie__poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.3rem;
}
.movie__description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
