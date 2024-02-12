<script setup lang="ts">

</script>

<template>
  <NuxtLink class="link">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
.link{
  font-size: 1.2rem;
  font-weight: bolder;
  outline: none;
  text-decoration: none;
  color: #5195DC;
  background: none;
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: white;
  }
}

@include breakpoint(large) {
  .link{
    font-size: 1.6rem;
  }
}
</style>