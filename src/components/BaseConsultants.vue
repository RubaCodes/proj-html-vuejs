<template>
  <section id="consultants">
    <div class="container ml-auto flex items-center gap-6">
      <h2 class="text-xl uppercase">our consultants can help you</h2>
      <hr class="border-green-400 border-2 grow" />
    </div>
    <ConsultantsLibrary class="container w-1/2 mx-auto pt-20" />
  </section>
</template>

<script>
import ConsultantsLibrary from './sections/ConsultantsLibrary.vue';
export default {
  components: { ConsultantsLibrary },
  name: 'BaseConsultants',
};
</script>
