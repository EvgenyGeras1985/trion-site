<script setup lang="ts">

</script>

<template>
  <header>
    <Nav></Nav>
  </header>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
header{
  z-index: 10;
  width: 100%;
  height: 60px;
}

@include breakpoint(large) {
  header{
    position: relative;
    margin: auto;
  }
}
</style>