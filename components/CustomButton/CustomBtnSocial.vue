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
  font-size: 1.4rem;
  font-weight: bolder;
  outline: none;
  text-decoration: none;
  color: #e1e1e1;
  background: none;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #5195DC;
  }
}

@include breakpoint(large) {

}
</style>