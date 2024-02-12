<script setup lang="ts">

</script>

<template>
  <div class="music-page">

  </div>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
.music-page{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@include breakpoint(large) {
  .music-page{
    flex-direction: row;
  }
}
</style>