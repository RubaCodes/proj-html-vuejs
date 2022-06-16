<template>
  <a
    @click="active = !active"
    class="block py-8 uppercase text-lg border-b-4 border-t-4 border-b-transparent"
    :class="{
      ' border-t-4 border-white': active,
      'border-t-transparent': !active,
    }"
    href="#"
    >{{ linkName }}</a
  >
</template>

<script>
export default {
  name: 'BaseNavLink',
  props: {
    linkName: String,
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>
