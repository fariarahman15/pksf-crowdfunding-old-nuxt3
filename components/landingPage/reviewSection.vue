<template>
  <div>
    <CommonContainer :class="[bgClass]">
      <div class="space-y-2" :class="[padding, textClass]">
        <h5 class="text-[30px] font-semibold leading-none text-primary py-2">
          {{ sectionTitle }}
        </h5>

        <section class="grid grid-cols-2 gap-5 pb-4">
          <LandingPageCardReview />
          <LandingPageCardReview />
        </section>
      </div>
    </CommonContainer>
  </div>
</template>

<script>
export default {
  name: "ReviewSection",
  props: {
    padding: { type: String, default: "px-0 py-0" },
    border: { type: String, default: "border-none" },
    shadow: { type: String, default: "shadow-none" },
    rounded: { type: String, default: "rounded-none" },
    bg: { type: String, default: "white" },
    text: { type: String, default: "black" },

    sectionTitle: {
      type: String,
      default: "",
    },
  },
  computed: {
    bgClass() {
      return this.bg ? `bg-${this.bg}` : "";
    },
    textClass() {
      return this.text ? `text-${this.text}` : "";
    },
  },
};
</script>
