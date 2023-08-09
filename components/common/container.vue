<template>
  <div :class="[margin, padding, border, shadow, rounded, background]">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    margin: { type: String, default: "mx-0 my-0" },
    padding: { type: String, default: "px-4 md:px-6 py-1" },
    border: { type: String, default: "border-none" },
    shadow: { type: String, default: "shadow-none" },
    rounded: { type: String, default: "rounded-none" },
    background: { type: String, default: "bg-white" },
  },
};
</script>
