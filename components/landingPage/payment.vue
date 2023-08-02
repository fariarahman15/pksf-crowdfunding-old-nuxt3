<template>
  <CommonContainer bg="white">
    <section class="px-6 lg:grid lg:grid-cols-12 items-center divide-x-2">
      <div class="text-center">
        <h3 class="text-lg font-medium">Pay With</h3>
      </div>

      <div class="col-span-10">
        <LandingPagePaymentLogo />
      </div>

      <div class="px-2">
        <h3 class="text-sm font-medium">Varified by</h3>
        <img
          class="max-w-[125px] lg:max-w-[100px] h-[50px]"
          src="~/public/paymentLogo/image_23.png"
          alt=""
        />
      </div>
    </section>
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
};
</script>
