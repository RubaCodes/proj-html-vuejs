<template>
  <div class="card px-20 py-16">
    <p class="text-slate-500">{{ review.paragraph }}</p>
    <h4 class="font-bold pt-8">{{ review.name }}</h4>
    <h6 class="text-slate-500">{{ review.company }}</h6>
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
