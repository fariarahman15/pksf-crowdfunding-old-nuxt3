<template>
  <div>
    <LandingPageNavbar />
    <LandingPageJumbotron />
    <LandingPageBanner />
    <LandingPageProjectSection
      sectionTitle="To Whom You May Invest?"
      :projects="projects"
    />
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
const projects = [
  {
    id: 1,
    percentage: "25%",
    projectImage: "_nuxt/public/images/demo_projectImage.png",
    title: "Noteworthy technology acquisitions 2021",
    profileImage: "_nuxt/public/images/demo_userImage.png",
    name: "Sample Name 1",
    occupation: "Entrepreneur",
  },
];
</script>

<style scoped></style>
