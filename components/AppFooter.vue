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
  position: absolute;
  margin: auto;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  width: 80%;
  height: 50px;
  color: #888888;
  text-shadow: 1px 1px 2px #c9bbbb, 0 0 1em #6e6e6e, 0 0 0.2em #000000;
}


@include breakpoint(large) {
  footer{
    width: 100%;
    bottom: 10px;
  }
}
</style>