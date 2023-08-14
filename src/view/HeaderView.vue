<script setup lang="ts">
import SearchInput from '../components/SearchInput.vue'
</script>
<template>
  <section class="common h-image">
    <h1 class="title">Movie Search Site</h1>
    <SearchInput />
  </section>
</template>
<style scoped lang="scss">
.h-image {
  background: url('/headerImage.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 10%;
  padding-bottom: 2%;
}
</style>
