<template>
  <div>
    <LandingPageNavbar />

    <div>
      <CommonBaseButton
        :noPadding="true"
        :noShadow="false"
        :bold="false"
        :locked="false"
        rounded="rounded-lg"
        :backgroundColor="'secondaryBase'"
        @click="handleButtonClick"
      >
        Click Me!
      </CommonBaseButton>
    </div>
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
