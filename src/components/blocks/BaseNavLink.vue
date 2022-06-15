<template>
  <a class="uppercase" href="/">{{ linkName }}</a>
</template>

<script>
export default {
  name: 'BaseNavLink',
  props: {
    linkName: String,
  },
};
</script>
