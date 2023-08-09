<template>
  <div>
    <CommonContainer background="bg-secondary">
      <div class="space-y-2 px-2 py-4 md:px-6 md:py-8">
        <h5 class="text-3xl font-semibold leading-none text-primary py-2">
          {{ sectionTitle }}
        </h5>

        <section class="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-4">
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
    sectionTitle: {
      type: String,
      default: "",
    },
  },
};
</script>
