<template>
  <div>
    <LandingPageNavbar />
    <LandingPageJumbotron />
    <LandingPageBanner />
    <LandingPageProjectSection sectionTitle="To Whom You May Invest?" />
    <LandingPageReviewSection sectionTitle="Reviews" />
    <LandingPagePaymentSection />

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
