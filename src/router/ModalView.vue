<script setup lang="ts">
defineProps<{ routerChange?: () => void }>()
</script>
<template>
  <article>
    <div
      class="modal"
      @click="routerChange">
      <slot />
    </div>
  </article>
</template>
<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 30;
  width: 100vw;
  height: 100vh;
  background-color: rgba(#000, 0.7);
}
</style>
