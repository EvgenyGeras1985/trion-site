<script setup lang="ts">

</script>

<template>
  <div class="logo">
    <img src="~/assets/images/logo.webp" alt="trion" />
  </div>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
.logo{
  z-index: 30;
  position: fixed;
  //text align-center
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  width: 65%;
  height: 15%;

  img{
    width: 100%;
    height: 100%;
  }
}

@include breakpoint(large) {
    .logo{
      margin: 0;
      left: 50px;
      top: 50px;
      width: 300px;
      height: 150px;
    }
  }
</style>