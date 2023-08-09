<template>
  <div class="mx-auto">
    <LandingPageNavbar />

    <section>
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: "landingPage",
};
</script>
