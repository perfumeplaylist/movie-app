<template>
  <div class="icon">
    <span class="material-symbols-outlined">
      <slot></slot>
    </span>
  </div>
</template>
<style scoped lang="scss">
.icon {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  cursor: pointer;
}
</style>
