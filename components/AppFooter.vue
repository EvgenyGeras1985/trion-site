<script setup lang="ts">

</script>

<template>
  <footer>
    <h3>Официальный сайт группы "ТРИОН" 2024 &copy;</h3>
  </footer>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
footer{
  width: 100%;
  height: 2%;
}


@include breakpoint(large) {
  footer{
    //height: 2%;
    @include flex-center;
    background: none;
  }
}
</style>