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
    <BaseBlog class="pt-44 pb-80" />
    <BaseGetStarted class="py-44" />
  </div>
</template>

<script>
import BaseBlog from './components/BaseBlog.vue';
import BaseConsultants from './components/BaseConsultants.vue';
import BaseGetStarted from './components/BaseGetStarted.vue';
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
    BaseBlog,
    BaseGetStarted,
  },
};
</script>
