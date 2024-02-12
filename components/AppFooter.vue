<script setup lang="ts">

</script>

<template>
  <footer>
    <custom-social></custom-social>
    <h3>Официальный сайт группы "ТРИОН" 2024 &copy;</h3>
  </footer>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
footer{
  width: 100%;
  height: 500px;
  color: #d2d2d2;
  background: $color-primary-footerBG;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items:center;

  h3{
    width: 50%;
    min-height: 20px;
    text-align: center;
  }
}


@include breakpoint(large) {
  footer{
    width: 100%;
  }
}
</style>