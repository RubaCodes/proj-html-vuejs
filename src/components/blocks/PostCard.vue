<template>
  <div class="card relative">
    <img :src="require('/src/assets/img/' + post.media)" :alt="post.title" />
    <div
      class="absolute w-3/4 bg-white right-0 bottom-0 px-16 py-8 translate-y-16"
    >
      <div class="w-3/4">
        <div class="text-red-500">
          <span class="mr-2">{{ post.date }}</span>
          <span>by {{ post.author }}</span>
        </div>
        <h3 class="text-xl py-4">{{ post.title }}</h3>
        <p class="text-sm text-slate-500">{{ post.article }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: Object,
  },
};
</script>
