<script setup lang="ts">

</script>

<template>
  <div class="card">
    <img src="#" alt="" />
  </div>
</template>

<style scoped lang="scss">
@import "assets/scss/_global.scss";


@include breakpoint(large) {
  .card{
    width: 20.0rem;
    height: 32.0rem;

    img{
      border: 1px solid #ef3636;
      border-radius: 50px;
      width: 100%;
      height: 100%;
    }
  }
}
</style>