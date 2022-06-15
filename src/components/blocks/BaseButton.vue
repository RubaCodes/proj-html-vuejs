<template>
  <button class="py-4 px-8 uppercase text-black" :class="color">
    {{ innerText }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    innerText: String,
    color: String,
  },
};
</script>
