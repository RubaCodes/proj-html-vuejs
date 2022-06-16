<template>
  <section class="bg-dark-background" id="projects">
    <div
      class="container mx-auto text-white pb-12 flex justify-between items-end"
      id="hero-title"
    >
      <div>
        <!-- sottotitolo -->
        <div class="flex gap-4 items-baseline pb-6">
          <hr class="w-20 border-primary-green border-2" />
          <h3 class="text-xl uppercase">about us</h3>
        </div>
        <!-- titolo -->
        <h2 class="text-4xl uppercase font-bold">
          our expert trusted consultants help clients
        </h2>
      </div>
      <CarouselButtons />
    </div>
    <div class="container mx-auto">
      <ProjectsLibray />
    </div>
  </section>
</template>

<script>
import ProjectsLibray from './sections/ProjectsLibray.vue';
import CarouselButtons from './blocks/CarouselButtons.vue';

export default {
  components: { ProjectsLibray, CarouselButtons },
  name: 'BaseProject',
};
</script>
