<script setup lang="ts">
import { ref } from 'vue'
import { useMovieStore } from '../store/movieList'
import TheIcon from '../components/TheIcon.vue'

const title = ref('')
const movieStore = useMovieStore()
function searchMovie() {
  if (!title.value.trim().length) return
  movieStore.searchMoive({ title: title.value })
  title.value = ''
}
</script>
<template>
  <div class="bar">
    <input
      v-model="title"
      placeholder="Search Movie..."
      @keydown.enter="searchMovie" />
    <TheIcon class="icon__parent">search</TheIcon>
  </div>
</template>
<style scoped lang="scss">
.bar {
  display: flex;
  justify-content: center;
}
.icon__parent {
  display: inline-block;
  color: white;
  border-color: white;
}
input {
  padding: 0 0.8rem 0 1rem;
  height: 2rem;
}
</style>
