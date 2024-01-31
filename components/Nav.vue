<script setup lang="ts">

</script>

<template>
  <nav>
    <NuxtLink to="/">Главная</NuxtLink>
    <NuxtLink to="/media">Фото и видео</NuxtLink>
    <NuxtLink to="/music">Музыка</NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
nav{
  width: 100%;
  height: 100%;
  @include flex-center;
}

@include breakpoint(large) {
  nav{

  }
}
</style>