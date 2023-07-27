<template>
  <button
    class="dark:text-custom-purple-100 cursor-pointer"
    :class="[
      noPadding ? '' : 'py-2 px-4',
      noShadow ? '' : 'text-shadow',
      bold ? 'font-bold' : '',
      rounded,
      backgroundColorClass,
    ]"
    :disabled="locked === true ? '' : false"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    noPadding: { type: Boolean, default: false },
    noShadow: { type: Boolean, default: false },
    bold: { type: Boolean, default: true },
    locked: { type: Boolean, default: false },
    rounded: { type: String, default: "rounded " },
    backgroundColor: { type: String, default: "" }, // Add this prop for background color
  },
  computed: {
    backgroundColorClass() {
      return this.backgroundColor ? `bg-${this.backgroundColor}` : "";
    },
  },
};
</script>
