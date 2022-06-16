<template>
  <div class="card">
    <p>{{ review.paragraph }}</p>
    <h4 class="font-bold">{{ review.name }}</h4>
    <h6>{{ reviw.company }}</h6>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard',
  props: {
    review: Object,
  },
};
</script>
