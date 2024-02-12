<script setup lang="ts">

</script>

<template>
    <video class="media"
           type="video/webm"
           width="100%"
           height="auto"
           muted="muted"
           autoplay="autoplay"
           loop
    >
      <source src="@/assets/video/shortWebMZerkala.webm" type="video/webm"></source>
    </video>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
.media{
  display: none;
}

@include breakpoint(large) {
  .media {
    display: block;
    top: 0;
    left: 0;
    position: absolute;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
  }
}
</style>