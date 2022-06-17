<template>
  <button
    class="uppercase hover:bg-primary-red hover:text-white hover:transition-colors px-8 py-4"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>
