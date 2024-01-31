<script setup lang="ts">
import GalleryCard from "~/components/GalleryPage/gallery-card.vue";
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__roundabout">
      <div class="wrapper__track" ref="track">
        <gallery-card class="wrapper__item" >asdasd</gallery-card>
        <gallery-card class="wrapper__item" >asdasd</gallery-card>
        <gallery-card class="wrapper__item" >asdasd</gallery-card>
        <gallery-card class="wrapper__item" >asdasd</gallery-card>
      </div>
    </div>
    <button  @click="prev()" class="wrapper__arrow-left">Prev</button>
    <button @click="next()" class="wrapper__arrow-right">Next</button>
  </div>
</template>

<style scoped lang="scss">
@import "assets/scss/_global.scss";

.wrapper{
  @include flex-center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  animation: show 9s;
  transform: translate(-50%,-50%);

  &__roundabout{
    position: relative;
    width: 100%;
    height: 540px;
    display: flex;
    justify-content: center;
    background: none;
    overflow: hidden; // скрывает трек
  }

  &__track{
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    transition: all ease 0.5s;
  }

  &__arrow-left{
    display: none;
  }

  &__arrow-right{
    display: none;
  }
}


@include breakpoint(large) {

  .wrapper{
    height: 760px;
    top: 200px;
    left: 0;
    transform: none;

    &__roundabout{
      width: 1280px;
      height: 760px;
    }

    &__track{
      flex-direction: row;
      left: 0; //не указав это не будет плавно анимации и блок будет не сначяла
    }

    &__item{
      display: flex; //исправляет шибку отображения карточек с постами
    }

    &__arrow-left{
      display: block;
      position: absolute;
      cursor: pointer;
      top: 35%;
      left: 13%;
      width: 40px;
      height: 60px;
      border-radius: 10px 0;
      color: gray;
      background: none;
      outline: 1px solid gray;
    }

    &__arrow-right{
      z-index: 1000;
      display: block;
      position: absolute;
      cursor: pointer;
      top: 35%;
      right: 13%;
      width: 40px;
      height: 60px;
      border-radius: 10px 0;
      color: gray;
      background: none;
      outline: 1px solid gray;
    }

    &__arrow-left:hover{
      color: gray;
      outline: 1px solid gray;
    }

    &__arrow-right:hover{
      color: gray;
      outline: 1px solid gray;
    }
  }
}
</style>