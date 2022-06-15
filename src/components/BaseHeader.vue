<template>
  <div class="container mx-auto flex justify-between items-center">
    <img class="w-36" src="../assets/img/logotype.png" alt="logo" />
    <BaseNav />
  </div>
</template>

<script>
import BaseNav from './blocks/BaseNav.vue';
export default {
  name: 'BaseHeader',
  components: {
    BaseNav,
  },
};
</script>
