<script setup lang="ts">

</script>

<template>
  <div class="video-bg">
    <video class="video-bg__media"
           src="@/assets/video/shortWebMZerkala.mp4"
           type="video/mp4"
           muted="muted"
           autoplay="autoplay"
           loop
    >
    </video>
  </div>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
.video-bg{
  display: none;
}

@include breakpoint(large) {
  .video-bg{
    width: 100%;
    height: 70%;
    @include flex-center;

    &__media{
      width: 100%;
    }
  }
}
</style>