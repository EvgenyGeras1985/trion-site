<script setup lang="ts">
import {CustomPhotosCard} from "@/types/CustomPhotosCard";

const props = defineProps<{
  listPhotos: CustomPhotosCard[],
}>()
</script>

<template>
  <div class="card" v-for="item in listPhotos">
    <img :src="item.img" alt="trion photo" />
  </div>
</template>

<style scoped lang="scss">
@import "assets/scss/_global.scss";


@include breakpoint(large) {
  .card{
    width: 20.0rem;
    height: 32.0rem;

    img{
      border: 2px solid #dedede;
      border-radius: 50px;
      width: 100%;
      height: 100%;
    }
  }
}
</style>