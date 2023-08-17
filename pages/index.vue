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
useHead({
  title: "Fund With PKSF",
  link: [{ rel: "icon", type: "image/png", href: "/favicon_pksf.png" }],
});

const projects = [
  {
    id: 1,
    percentage: "25%",
    projectImage: "_nuxt/public/images/demo_projectImage_1.png",
    title:
      " Lorem ipsum dolor sit amet unde recusandae cupiditate perspiciatis dolorum eaque",
    profileImage: "_nuxt/public/images/demo_userImage.png",
    name: "Sample Name 1",
    occupation: "Entrepreneur",
  },
  {
    id: 2,
    percentage: "45%",
    projectImage: "_nuxt/public/images/demo_projectImage_2.png",
    title: "Consectetur adipisicing elit",
    profileImage: "_nuxt/public/images/demo_userImage.png",
    name: "Sample Name 2",
    occupation: "Entrepreneur",
  },

  {
    id: 3,
    percentage: "15%",
    projectImage: "_nuxt/public/images/demo_projectImage_3.png",
    title: "Provident molestiae debitis molestias fugit minus",
    profileImage: "_nuxt/public/images/demo_userImage.png",
    name: "Sample Name 3",
    occupation: "Entrepreneur",
  },
  {
    id: 4,
    percentage: "10%",
    projectImage: "_nuxt/public/images/demo_projectImage_4.png",
    title: "Tempora illo enim quis distinctio culpa itaque cumque",
    profileImage: "_nuxt/public/images/demo_userImage.png",
    name: "Sample Name 3",
    occupation: "Entrepreneur",
  },
  {
    id: 5,
    percentage: "76%",
    projectImage: "_nuxt/public/images/demo_projectImage_5.png",
    title: "Beatae saepe enim numquam tenetur ipsa magni perspiciatis",
    profileImage: "_nuxt/public/images/demo_userImage.png",
    name: "Sample Name 3",
    occupation: "Entrepreneur",
  },
  {
    id: 6,
    percentage: "94%",
    projectImage: "_nuxt/public/images/demo_projectImage_6.png",
    title:
      "exercitationem nihil accusamus neque quos eligendi doloremque hic minus",
    profileImage: "_nuxt/public/images/demo_userImage.png",
    name: "Sample Name 3",
    occupation: "Entrepreneur",
  },
];
</script>

<style scoped></style>
