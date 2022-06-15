<template>
  <div class="card bg-red-500 relative">
    <img
      class="block hover:opacity-30 transition-all 100ms ease-in-out"
      src="https://picsum.photos/790/592"
      :alt="project.name"
    />
    <div class="absolute bottom-0 left-0 right-0">
      <h3>{{ project.name }}</h3>
      <h4>{{ project.category }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LibraryCard',
  props: {
    project: Object,
  },
};
</script>
