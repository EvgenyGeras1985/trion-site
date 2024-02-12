<script setup lang="ts">

import CustomButton from "~/components/CustomButton/Custom-button.vue";
</script>

<template>
  <nav>
    <custom-button to="/">Главная</custom-button>
    <custom-button to="/media">Фото и видео</custom-button>
    <custom-button to="/music">Музыка</custom-button>
  </nav>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
nav{
  opacity: 0;
  width: 80%;
  height: 100%;
  @include flex-center;
}

@include breakpoint(large) {
  nav{
    position: absolute;
    top: 100px;
    right: 100px;
    width: 50%;
    opacity: 1;
  }
}
</style>