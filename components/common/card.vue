<template>
  <div
    class="w-full"
    :class="[margin, padding, border, shadow, rounded, textAlign, background]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    margin: { type: String, default: "mx-0 my-0" },
    padding: { type: String, default: "p-2 md:p-4" },
    border: { type: String, default: "border" },
    shadow: { type: String, default: "shadow-md" },
    rounded: { type: String, default: "rounded-md" },
    textAlign: { type: String, default: "text-center" },
    background: { type: String, default: "bg-white" },
  },
};
</script>
