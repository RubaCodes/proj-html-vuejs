<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
    <ReviewCard
      v-for="(review, index) in data.reviews"
      :key="index"
      :review="review"
    />
  </div>
</template>

<script>
import ReviewCard from '../blocks/ReviewCard.vue';
import data from '../../data.js';
export default {
  components: { ReviewCard },
  name: 'ReviewsLibrary',
  data() {
    return {
      data,
    };
  },
};
</script>
