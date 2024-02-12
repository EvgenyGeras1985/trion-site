<script setup lang="ts">
// import photo from "../../"
const listPhotos =[
  {img: "../../assets/images/Gallery/photo1.jpg"},
  {img: "../assets/images/Gallery/photo2.jpg"},
  {img: "../assets/images/Gallery/photo3.jpg"},
  {img: "../assets/images/Gallery/photo4.jpg"},
  {img: "../assets/images/Gallery/photo5.jpg"},
]
</script>

<template>
 <div class="gallery">
<!--   <img style="width: 100%"; height="100%" src="../../assets/images/Gallery/photo1.jpg" />-->
 </div>
</template>

<style scoped lang="scss">
@import "assets/scss/_global.scss";
.gallery{
  width: 100%;
  height: 100vh;
}


@include breakpoint(large) {
  .gallery{

  }
}
</style>