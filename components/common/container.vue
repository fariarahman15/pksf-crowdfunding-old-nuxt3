<template>
  <div :class="[margin, padding, border, shadow, rounded, bgClass]">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    margin: { type: String, default: "mx-0 my-0" },
    padding: { type: String, default: "px-6 py-1" },
    border: { type: String, default: "border-none" },
    shadow: { type: String, default: "shadow-none" },
    rounded: { type: String, default: "rounded-none" },
    bg: { type: String, default: "" },
  },
  computed: {
    bgClass() {
      return this.bg ? `bg-${this.bg}` : "";
    },
  },
};
</script>
