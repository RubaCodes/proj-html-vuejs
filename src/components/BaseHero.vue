<template>
  <!-- b-image con offest dx ,un macello il responsive -->
  <section
    class="bg-dark-background bg-hero-pattern bg-no-repeat bg-right bg-contain"
    id="hero"
  >
    <div
      class="container mx-auto text-white uppercase pt-80 pb-72"
      id="hero-title"
    >
      <div class="flex gap-4 items-baseline">
        <hr class="w-20 border-primary-green border-2" />
        <h3 class="text-xl">always the best way you need it</h3>
      </div>
      <!-- larghezze percentuali ? -->
      <h1 class="text-9xl w-2/5">the best business consulting</h1>

      <BaseButton class="mt-8 px-8 py-4 bg-primary-green text-black">
        read more
      </BaseButton>
      <PlayButton class="ml-6 text-primary-green" />
    </div>
  </section>
</template>

<script>
import BaseButton from './blocks/BaseButton.vue';
import PlayButton from './blocks/PlayButton.vue';
export default {
  components: { BaseButton, PlayButton },
  name: 'BaseHero',
};
</script>
