<template>
  <CommonContainer :class="[bgClass]"
    ><section
      class="grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-start items-center gap-2"
      :class="[padding, textClass]"
    >
      <div class="w-full md:w-[90%]">
        <h1
          class="mb-3 text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-start lg:w-[80%]"
        >
          Exploring Innovative Funding Ideas
        </h1>

        <CommonSearchInput />
      </div>

      <div>
        <img
          src="https://images.pexels.com/photos/2407634/pexels-photo-2407634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="w-full rounded-lg shadow-2xl max-h-[350px]"
        />
      </div>
    </section>
  </CommonContainer>
</template>

<script>
export default {
  name: "Jumbotron",
  props: {
    padding: { type: String, default: "px-0 py-0" },
    border: { type: String, default: "border-none" },
    shadow: { type: String, default: "shadow-none" },
    rounded: { type: String, default: "rounded-none" },
    bg: { type: String, default: "white" },
    text: { type: String, default: "black" },
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
