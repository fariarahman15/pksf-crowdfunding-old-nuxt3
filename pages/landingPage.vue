<template>
  <div>
    <LandingPageNavbar bg="secondary" text="black" />
    <LandingPageJumbotron bg="primary" padding="px-6 py-8" />
    <LandingPageBanner padding="px-6 py-8 " />
    <LandingPageCardGroup />
    <LandingPageCardGroup2 />
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
