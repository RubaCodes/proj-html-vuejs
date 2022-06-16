<template>
  <footer class="bg-dark-background">
    <div class="mx-auto container">
      <FooterTop class="py-8" />
      <hr class="border-primary-gray" />
      <FooterBottom class="py-6" />
    </div>
  </footer>
</template>

<script>
import FooterBottom from './sections/FooterBottom.vue';
import FooterTop from './sections/FooterTop.vue';
export default {
  components: { FooterTop, FooterBottom },
  name: 'BaseFooter',
};
</script>
