<script setup lang="js">
useHead({


});
</script>
<template>
  <div>
    <LandingPageNavbar />
    <section class="flex">
      <SideBarSidebarDashboard />

      <slot />
    </section>
  </div>
</template>

<style scoped></style>
