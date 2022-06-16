<template>
  <div
    @mouseenter="hovered = !hovered"
    @mouseleave="hovered = !hovered"
    class="card relative"
  >
    <img
      class="w-full transition-opacity opacity-0"
      :class="{ 'opacity-100': hovered }"
      :src="require('/src/assets/img/' + review.profilePic)"
      alt=""
    />
    <div class="absolute top-0 bottom-0 right-0 left-0 px-20 py-16">
      <p :class="{ 'text-slate-300': hovered }" class="text-slate-500">
        {{ review.paragraph }}
      </p>
      <h4 :class="{ 'text-white': hovered }" class="font-bold text-3xl pt-8">
        {{ review.name }}
      </h4>
      <h6 :class="{ 'text-slate-300': hovered }" class="text-slate-500 text-xl">
        {{ review.company }}
      </h6>
    </div>
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
