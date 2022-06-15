<template>
  <div class="card">
    <img src="" :alt="project.name" />
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
