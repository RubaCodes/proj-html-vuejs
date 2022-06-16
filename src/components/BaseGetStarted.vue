<template>
  <section class="bg-get-started-banner bg-cover bg-no-repeat" id="get-started">
    <div
      class="container mx-auto flex flex-col justify-center items-center text-white"
    >
      <h2 class="text-6xl font-bold py-2 uppercase">let's talk about work</h2>
      <p class="pb-8 text-lg">
        A wonderful serenity has taken possession. Far far away, behind the word
        mountains.
      </p>
      <BaseButton :color="'bg-slate-900'" :innerText="'get started'" />
    </div>
  </section>
</template>

<script>
import BaseButton from './blocks/BaseButton.vue';
export default {
  components: { BaseButton },
  name: 'BaseGetStarted',
};
</script>
