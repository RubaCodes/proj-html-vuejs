<template>
  <div id="app">
    <BaseHeader
      class="bg-transparent text-white absolute top-0 left-0 right-0 z-10"
    />
    <BaseHero />
    <BaseConsultants class="py-28" />
  </div>
</template>

<script>
import BaseConsultants from './components/BaseConsultants.vue';
import BaseHeader from './components/BaseHeader.vue';
import BaseHero from './components/BaseHero.vue';
export default {
  name: 'App',
  components: { BaseHeader, BaseHero, BaseConsultants },
};
</script>
