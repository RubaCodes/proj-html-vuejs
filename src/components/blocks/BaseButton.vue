<template>
  <button
    class="py-4 px-8 uppercase hover:bg-red-500 hover: text-white hover:transition-colors"
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
    color: String,
  },
};
</script>
