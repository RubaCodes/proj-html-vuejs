<template>
  <div
    @mouseenter="hovered = !hovered"
    @mouseleave="hovered = !hovered"
    class="card px-20 py-16"
    :class="{ 'bg-[url(https://via.placeholder.com/501x436)]': hovered }"
  >
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
  data() {
    return {
      hovered: false,
    };
  },
};
</script>
