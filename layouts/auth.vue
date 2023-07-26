<script setup lang="js">

useHead({
  title: "Login | Admin Panel ",

  script: [
    { src: "/plugins/jquery/jquery.min.js", body: true },
    { src: "/plugins/bootstrap/js/bootstrap.bundle.min.js", body: true },
    { src: "/dist/js/adminlte.min.js", body: true },
  ],

  link: [
    {
      rel: "stylesheet",
      type: "text/css",
      href: "plugins/icheck-bootstrap/icheck-bootstrap.min.css",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "dist/css/adminlte.min.css",
    },
  ],
});


import { useAuthStore } from '~/stores/auth';
const authStore = useAuthStore();

const showLogin = ref(true);
if (authStore.isAuthenticated) {
  showLogin.value = false;
  navigateTo('/');
}
</script>
<template>
  <common-preloader></common-preloader>
  <slot />
</template>

<style scoped></style>
