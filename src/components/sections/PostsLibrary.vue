<template>
  <div class="grid grid-cols-2 gap-6">
    <PostCard
      v-for="(post, index) in data.blogPosts"
      :key="index"
      :post="post"
    />
  </div>
</template>

<script>
import data from '../../data.js';
import PostCard from '../blocks/PostCard.vue';
export default {
  name: 'PostsLibrary',
  components: {
    PostCard,
  },
  data() {
    return { data };
  },
};
</script>
