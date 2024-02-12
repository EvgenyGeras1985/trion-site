<script setup lang="ts">
import { Icon } from '@iconify/vue';
import CustomBtnSocial from "~/components/CustomButton/CustomBtnSocial.vue";
</script>

<template>
  <div class="social">
    <custom-btn-social to="https://vk.com/trionband">
      <Icon icon="cib:vk" width="2.5em" height="4.0em" />
    </custom-btn-social>
    <custom-btn-social>
      <Icon icon="bi:youtube" width="2.5em" height="4.2em" />
    </custom-btn-social>
    <custom-btn-social>
      <Icon icon="cib:yandex" width="4.2em" height="4.2em" />
    </custom-btn-social>
  </div>
</template>

<style scoped lang="scss">
@import "assets/scss/_global";
.social{
  width: 100%;
  min-height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

@include breakpoint(large) {
  .social{
    width: 20%;
  }
}
</style>