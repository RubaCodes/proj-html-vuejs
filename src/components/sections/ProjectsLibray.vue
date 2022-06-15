<template>
  <div class="flex gap-x-4">
    <ProjectCard
      v-for="(project, index) in data.projects"
      :key="index"
      :project="project"
    />
  </div>
</template>

<script>
import data from '../../data.js';
import ProjectCard from '../blocks/ProjectCard.vue';
export default {
  components: { ProjectCard },
  name: 'ProjectsLibrary',
  data() {
    return {
      data,
    };
  },
};
</script>
