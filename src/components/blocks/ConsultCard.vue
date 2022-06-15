<template>
  <div class="card flex gap-8">
    <i
      :class="info.icon"
      class="fa-solid bg-red-500 p-3 rounded-full text-white"
    ></i>
    <div>
      <h3 class="uppercase text-lg">{{ info.title }}</h3>
      <p class="text-sm text-slate-600">{{ info.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConsultCard',
  props: {
    info: Object,
  },
};
</script>
