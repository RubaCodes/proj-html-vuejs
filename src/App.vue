<template>
  <div id="app">
    <BaseHeader
      class="bg-transparent text-white absolute top-0 left-0 right-0 z-10"
    />
    <BaseHero />
    <BaseConsultants class="py-28" />
    <BaseStrategy />
    <BaseProject class="py-32" />
    <BaseReviews />
  </div>
</template>

<script>
import BaseConsultants from './components/BaseConsultants.vue';
import BaseHeader from './components/BaseHeader.vue';
import BaseHero from './components/BaseHero.vue';
import BaseProject from './components/BaseProject.vue';
import BaseReviews from './components/BaseReviews.vue';
import BaseStrategy from './components/BaseStrategy.vue';

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseHero,
    BaseConsultants,
    BaseStrategy,
    BaseProject,
    BaseReviews,
  },
};
</script>
