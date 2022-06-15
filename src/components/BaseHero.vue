<template>
  <section
    class="bg-slate-900 bg-hero-pattern bg-no-repeat bg-right bg-contain"
    id="hero"
  >
    <div
      class="container mx-auto text-white uppercase pt-80 pb-72"
      id="hero-title"
    >
      <div class="flex gap-4 items-baseline">
        <hr class="w-20 border-green-400 border-2" />
        <h3 class="text-2xl">always the best way you need it</h3>
      </div>
      <h1 class="text-9xl w-2/5">the best businnes consulting</h1>

      <BaseButton
        class="mt-8"
        :color="'bg-green-400'"
        :innerText="'read more'"
      />
      <PlayButton class="ml-6" />
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
