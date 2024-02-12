<script setup lang="ts">
import VideoBackground from "~/components/videoBack/video-background.vue";
</script>

<template>
  <main class="main">
    <video-background />
  </main>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
.main{
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

@include breakpoint(large) {
  .main{

  }
}
</style>

<!--<html>-->
<!--<head>-->
<!--  <title>Видео в качестве фона сайта - Нубекс</title>-->
<!--  <style>-->
<!--    .overlay {width: 100%; height:100%; display:block;}-->
<!--    #nubexDiv {-->
<!--      top: 0; bottom: 0; left: 0; right: 0;-->
<!--      position: fixed;-->
<!--      overflow: hidden;-->
<!--    }-->
<!--    #nubexVideo {-->
<!--      top: 0;-->
<!--      left: 0;-->
<!--      position: absolute;-->
<!--      width: auto;-->
<!--      height: auto;-->
<!--      min-width: 100%;-->
<!--      min-height: 100%;-->
<!--    }-->
<!--  </style>-->
<!--</head>-->
<!--<body>-->
<!--<div id="nubexDiv" class="overlay">-->
<!--  <video-->
<!--      id="nubexVideo"-->
<!--      width="100%"-->
<!--      height="auto"-->
<!--      loop="loop"-->
<!--      autoplay="autoplay"-->
<!--      preload="auto">-->
<!--    <source src="nubex.mp4"></source>-->
<!--    <source src="nubex.webm" type="video/webm"></source>-->
<!--  </video>-->
<!--</div>-->
<!--</body>-->
<!--</html>-->
