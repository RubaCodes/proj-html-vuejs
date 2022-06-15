<template>
  <div class="grid grid-cols-2 gap-20">
    <ConsultCard
      v-for="(consult, index) in data.consultantsCardContent"
      :key="index"
      :info="consult"
    />
  </div>
</template>

<script>
import ConsultCard from '../blocks/ConsultCard.vue';
import data from '../../data.js';
export default {
  name: 'ConsultantsLibrary',
  components: { ConsultCard },
  data() {
    return {
      data,
    };
  },
};
</script>

<style></style>
