<template>
  <div
    :class="[
      margin ? '' : 'mx-0 my-0',
      padding ? '' : 'px-6 py-1',
      border ? '' : 'border-none',
      shadow ? '' : 'shadow-none',
      rounded ? '' : 'rounded-none',
      bgClass,
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    margin: { type: Boolean, default: false },
    padding: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    bg: { type: String, default: "" },
  },
  computed: {
    bgClass() {
      return this.bg ? `bg-${this.bg}` : "";
    },
  },
};
</script>
