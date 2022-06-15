<template>
  <div id="app">
    <BaseHeader />
    <BaseHero />
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader.vue';
import BaseHero from './components/BaseHero.vue';
export default {
  name: 'App',
  components: { BaseHeader, BaseHero },
};
</script>
