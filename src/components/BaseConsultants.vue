<template>
  <section id="consultants">
    <div class="flex items-center gap-10 container ml-auto">
      <h2 class="text-xl uppercase">our consultants can help you</h2>
      <hr class="border-green-400 border-2 grow" />
    </div>
    <ConsultantsLibrary class="container ml-auto pt-20" />
  </section>
</template>

<script>
import ConsultantsLibrary from './sections/ConsultantsLibrary.vue';
export default {
  components: { ConsultantsLibrary },
  name: 'BaseConsultants',
};
</script>
