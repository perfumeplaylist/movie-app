<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDetailMoive } from '~/store/detailMovie.ts'
import TheLoading from '~/components/TheLoading.vue'
import ModalView from '~/router/ModalView.vue'
const route = useRoute()
const router = useRouter()
const detailMoive = useDetailMoive()

const currentId = computed(() => {
  const { id } = route.params
  return id
})

;(async () => await detailMoive.searchDetailMovie(currentId.value))()

const changeRouter = () => {
  router.push('/')
  detailMoive.$reset()
}
</script>

<template>
  <TheLoading v-if="detailMoive.loading" />
  <ModalView
    v-if="!detailMoive.loading"
    :router-change="changeRouter">
    <div class="modal__content">
      <img
        class="modal__content__image"
        :src="
          detailMoive.movieInfo.Poster === 'N/A'
            ? '/no_image.jpeg'
            : detailMoive.movieInfo.Poster
        "
        :alt="detailMoive.movieInfo.Title"
        @click="removeModal" />
      <div class="modal__content__txt">
        <h2 class="">제목: {{ detailMoive.movieInfo.Title }}</h2>
        <p>줄거리:{{ detailMoive.movieInfo.Plot }}</p>
        <p>배우:{{ detailMoive.movieInfo.Actors }}</p>
        <!-- <p>평점 :{{ detailMoive.movieInfo.Ratings[0].Value }}</p> -->
        <p>영화시간 :{{ detailMoive.movieInfo.Runtime }}</p>
      </div>
    </div>
  </ModalView>
</template>
<style scoped lang="scss">
.modal__content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 50%;
  &__image {
    object-fit: cover;
    width: 300px;
    height: 300px;
  }
  &__txt {
    margin-left: 0.6rem;
    font-size: 1rem;
    line-height: 1rem;
  }
}
</style>
