<script setup lang="ts">
import Logo from "~/components/Logo.vue";
import VideoBackground from "~/components/videoBack/video-background.vue";
</script>

<template>
  <div class="layout-default">
    <Logo />
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

.layout-default{
  background: $color-primary-layoutBG center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
@include breakpoint(large) {

}
</style>