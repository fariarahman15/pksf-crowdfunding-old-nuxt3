<template>
  <div>
    <LandingPageNavbar />
    <LandingPageJumbotron />
    <LandingPageBanner />
    <LandingPageCardGroup />
    <LandingPageCardGroup2 />
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
