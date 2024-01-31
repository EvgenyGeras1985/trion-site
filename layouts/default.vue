<script setup lang="ts">
import Logo from "~/components/Logo.vue";
</script>

<template>
  <div class="layout">
    <Logo />
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

.layout{
  background: $color-primary-layoutBG center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
@include breakpoint(large) {

}
</style>