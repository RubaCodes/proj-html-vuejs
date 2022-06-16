<template>
  <section
    class="bg-slate-900 bg-strategy-pattern bg-no-repeat bg-left bg-contain"
    id="strategy"
  >
    <div class="container mx-auto text-white py-56" id="hero-title">
      <div class="w-1/3 ml-auto">
        <div class="flex gap-4 items-baseline pb-6">
          <hr class="w-20 border-green-400 border-2" />
          <h3 class="text-xl uppercase">about us</h3>
        </div>
        <h2 class="text-5xl uppercase font-bold">we make your strategy work</h2>
        <p class="pt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          repellendus esse, in optio beatae veritatis, qui ipsum facilis eius
          quo quae, illo ea blanditiis perferendis ut aspernatur! Reprehenderit,
          placeat adipisci?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam, in? Suscipit voluptas perspiciatis quis quae sed
          aliquam. Laborum quidem facilis explicabo aliquam in assumenda iure
          soluta sunt distinctio? Molestias, aliquam.
        </p>
      </div>
    </div>
    <div class="w-[90%] mr-auto bg-green-400 py-16 relative">
      <div class="container w-3/5 mx-auto flex gap-80 items-center">
        <h3 class="text-2xl uppercase w-3/12 font-bold">
          we help to deliver the business case
        </h3>
        <p class="w-2/5 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          consectetur aut officiis, iste tempore inventore blanditiis asperiores
          ex porro veniam facilis praesentium doloribus reiciendis deserunt
          similique iusto totam? Rem, distinctio.
        </p>
        <BaseButton
          class="mt-8 absolute bottom-0 right-0 text-white"
          :color="'bg-red-500'"
          :innerText="'read more'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from './blocks/BaseButton.vue';
export default {
  name: 'BaseStrategy',
  components: {
    BaseButton,
  },
};
</script>
