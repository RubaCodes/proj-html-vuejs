<template>
  <a class="block py-8 uppercase font-xl" href="/">{{ linkName }}</a>
</template>

<script>
export default {
  name: 'BaseNavLink',
  props: {
    linkName: String,
  },
};
</script>
