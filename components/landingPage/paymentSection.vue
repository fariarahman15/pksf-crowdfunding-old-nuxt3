<template>
  <CommonContainer background="bg-white">
    <section
      class="lg:grid lg:grid-cols-10 content-center items-center divide-y-2 lg:divide-y-0 lg:divide-x-2 px-2 py-4 md:px-6 md:py-4"
    >
      <div class="col-span-8">
        <div class="text-start">
          <h3 class="text-lg font-medium">Pay With</h3>
        </div>
        <LandingPagePaymentLogo padding="pl-0 pr-3 pb-3" />
      </div>

      <div class="px-2 col-span-2 py-3">
        <h3 class="text-sm font-medium">Varified by</h3>
        <img
          class="max-w-[125px] lg:max-w-[100px] min-h-[35px]"
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
};
</script>
