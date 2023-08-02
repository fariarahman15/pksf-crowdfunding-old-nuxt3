<template>
  <div class="px-3 flex flex-wrap justify-items-start">
    <img
      v-for="image in images"
      :key="image"
      class="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] flex items-center justify-center"
      :src="`./_nuxt/public/paymentLogo/${image}`"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "paymentLogo",

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
