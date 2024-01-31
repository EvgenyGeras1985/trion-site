<script setup lang="ts">

</script>

<template>
    <video class="video-bg__media"
           src="@/assets/video/shortWebMZerkala.webm"
           type="video/webm"
           muted="muted"
           autoplay="autoplay"
           loop
    >
    </video>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
video{
  display: none;
}

@include breakpoint(large) {
  video {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>