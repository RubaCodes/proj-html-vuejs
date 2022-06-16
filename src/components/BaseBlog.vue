<template>
  <section class="bg-dark-background" id="blog">
    <div
      class="container mx-auto text-white pb-12 flex justify-between items-end"
      id="hero-title"
    >
      <div>
        <!-- sottotitolo -->
        <div class="flex gap-4 items-baseline pb-6">
          <hr class="w-20 border-primary-green border-2" />
          <h3 class="text-xl uppercase">blog</h3>
        </div>
        <!-- titolo -->
        <h2 class="text-4xl uppercase font-bold">
          the recent news you must read it
        </h2>
      </div>
      <BaseButton
        class="bg-primary-green px-10 text-black"
        :innerText="'view all'"
      />
    </div>
    <PostsLibrary class="container mx-auto" />
  </section>
</template>

<script>
import BaseButton from './blocks/BaseButton.vue';
import PostsLibrary from './sections/PostsLibrary.vue';
export default {
  components: { BaseButton, PostsLibrary },
  name: 'BaseBlog',
};
</script>
