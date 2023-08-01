<template>
  <CommonContainer>
    <div><h3 class="text-[24px] font-medium">Pay With</h3></div>
    <div>
      <div>
        <div>
          <img
            v-for="image in images"
            :key="image"
            class="w-[100px] h-[100px]"
            :src="images"
            alt=""
          />
          <img
            class="w-[100px] h-[100px]"
            src="~/public/paymentLogo/image 1.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div></div>
  </CommonContainer>
</template>

<script>
export default {
  name: "",
  props: {
    margin: { type: Boolean, default: false },
    padding: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    bg: { type: String, default: "" },
  },

  data() {
    return {
      images: [
        "~/public/paymentLogo/image 1.png",
        "~/public/paymentLogo/image 2.png",
        "~/public/paymentLogo/image 3.png",
      ],
    };
  },
};
</script>
