<template>
  <button
    class="uppercase hover:bg-primary-red hover:text-white hover:transition-colors px-8 py-4"
    :class="color"
  >
    {{ innerText }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    innerText: String,
  },
};
</script>
