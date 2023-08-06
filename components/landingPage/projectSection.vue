<template>
  <div>
    <CommonContainer :class="[bgClass]">
      <section :class="[padding, textClass]" class="space-y-2">
        <div
          class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2"
        >
          <h5 class="text-[30px] font-semibold leading-none text-primary">
            {{ sectionTitle }}
          </h5>

          <a
            href=""
            class="text-base font-semibold text-primary hover:underline bg-secondary border border-primary rounded-full text-center px-4 py-1 w-24"
            >See all</a
          >
        </div>

        <LandingPageProjectCardGroup />
      </section>
    </CommonContainer>
  </div>
</template>

<script>
export default {
  name: "ProjectSection",
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
