<template>
  <div class="flex flex-wrap justify-start gap-1" :class="[padding]">
    <img
      v-for="image in images"
      :key="image"
      class="basis-[9.0909%] max-w-[50px] max-h-[50px] lg:max-w-[60px] lg:max-h-[60px] 2xl:max-w-[70px] 2xl:max-h-[70px] flex items-center justify-center"
      :src="`./_nuxt/public/paymentLogo/${image}`"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "paymentLogo",

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

  data() {
    return {
      images: [
        "image_1.png",
        "image_2.png",
        "image_3.png",
        "image_4.png",
        "image_5.png",
        "image_6.png",
        "image_7.png",
        "image_8.png",
        "image_9.png",
        "image_10.png",
        "image_11.png",
        "image_12.png",
        "image_13.png",
        "image_14.png",
        "image_15.png",
        "image_16.png",
        "image_17.png",
        "image_18.png",
        "image_19.png",
        "image_20.png",
        "image_21.png",
        "image_22.png",
      ],
    };
  },
};
</script>
