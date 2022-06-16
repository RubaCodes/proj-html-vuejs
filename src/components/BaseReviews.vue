<template>
  <section class="bg-slate-900" id="reviews">
    <div class="text-right container mx-auto text-white py-8">
      <div class="flex gap-4 items-baseline pb-6 justify-end">
        <h3 class="text-xl uppercase">testimonials</h3>
        <hr class="w-20 border-green-400 border-2" />
      </div>
      <!-- titolo -->
      <h2 class="text-4xl uppercase font-bold">
        what's the customer say about our work
      </h2>
    </div>
    <div class="w-[90%] ml-auto bg-white">
      <ReviewsLibrary class="container mr-auto" />
    </div>
  </section>
</template>

<script>
import ReviewsLibrary from './sections/ReviewsLibrary.vue';
export default {
  components: { ReviewsLibrary },
  name: 'BaseReviews',
};
</script>

<style></style>
