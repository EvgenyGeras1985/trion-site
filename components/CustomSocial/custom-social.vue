<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="social">
    <custom-button to="https://vk.com/trionband">
      <Icon icon="simple-icons:vk" width="2.2em" height="4.2em"/>
    </custom-button>
    <custom-button>
      <Icon icon="bi:youtube" width="2.5em" height="4.2em" />
    </custom-button>
    <custom-button>
      <Icon icon="cib:yandex" width="4.2em" height="4.2em" />
    </custom-button>
  </div>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
.social{
  z-index: 10;
  position: absolute;
  top: 130px;
  width: 80%;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

@include breakpoint(large) {
  .social{
    margin: 0;
    width: 20%;
    top: 200px;
    left: 70%;
  }
}
</style>