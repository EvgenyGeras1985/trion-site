<script setup lang="ts">
import VideoBackground from "~/components/videoBack/video-background.vue";
const appConfig = useAppConfig()
</script>

<template>
  <main>
    <video-background />
  </main>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
main{
  width: 100%;
  height: 100%;
}

@include breakpoint(large) {
  main{

  }
}
</style>