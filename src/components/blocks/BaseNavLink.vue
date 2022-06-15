<template>
  <a class="block py-8 uppercase text-lg" href="/">{{ linkName }}</a>
</template>

<script>
export default {
  name: 'BaseNavLink',
  props: {
    linkName: String,
  },
};
</script>
