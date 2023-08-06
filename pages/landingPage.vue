<template>
  <div>
    <LandingPageNavbar bg="secondary" text="black" />
    <LandingPageJumbotron bg="primary" padding="px-6 py-8" />
    <LandingPageBanner padding="px-6 py-8 " />
    <LandingPageProjectSection
      bg="white"
      padding="px-6 py-4"
      sectionTitle="To Whom You May Invest?"
    />
    <LandingPageReviewSection
      bg="secondary"
      padding="px-6 py-4"
      sectionTitle="Reviews"
    />
    <LandingPagePayment />
    <LandingPageFooter />
  </div>
</template>

<script setup>
{
  definePageMeta({
    layout: "landingPage",
  });
}
</script>

<style scoped></style>
