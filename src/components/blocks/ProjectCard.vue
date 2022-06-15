<template>
  <div
    class="card bg-red-700 relative text-white capitalize"
    @mouseenter="hovered = !hovered"
    @mouseleave="hovered = !hovered"
  >
    <img
      class="block hover:opacity-20 transition-opacity 100ms ease-in-out"
      src="https://picsum.photos/790/592"
      :alt="project.name"
    />
    <div
      :class="{ 'opacity-0': !hovered }"
      class="absolute p-4 bottom-0 left-0 right-0 hover:opacity-100 transition-opacity 100ms ease-in-out"
    >
      <h3 class="text-2xl font-bold">{{ project.name }}</h3>
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
  data() {
    return {
      hovered: false,
    };
  },
};
</script>
