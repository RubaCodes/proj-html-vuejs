<template>
  <ul class="flex gap-8 items-center">
    <li v-for="link in data.headerLinkList" :key="link">
      <BaseNavLink :linkName="link"></BaseNavLink>
    </li>
  </ul>
</template>

<script>
import data from '../../data.js';
import BaseNavLink from './BaseNavLink.vue';
export default {
  name: 'BaseNav',
  components: {
    BaseNavLink,
  },
  data() {
    return {
      data,
      active: false,
    };
  },
};
</script>
