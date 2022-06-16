<template>
  <div class="flex justify-between items-center text-white" id="footer-top">
    <img src="../../assets/img/logotype-2-150x25.png" alt="log-small" />
    <BaseNav class="text-primary-gray hidden xl:flex" />
    <div class="flex gap-4" id="socials">
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-linkedin-in"></i>
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-twitter"></i>
    </div>
  </div>
</template>

<script>
import BaseNav from '../blocks/BaseNav.vue';
export default {
  components: { BaseNav },
  name: 'FooterTop',
};
</script>

<style></style>
