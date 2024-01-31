<script setup lang="ts">
import VideoBackground from "~/components/videoBack/video-background.vue";
</script>

<template>
  <main>
   <video-background />
  </main>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
main{

}

@include breakpoint(large) {
  main{
    position: relative;
    opacity: 0.7;
    width: 100%;
    height: 85%;
    /* Will not allow the video to overflow the
  container */
    overflow: hidden;
    /* Centering the container's content vertically
    and horizontally */
    //text-align: center;
    //display: flex;
    //align-items: center;
    //justify-content: center;
  }
}
</style>