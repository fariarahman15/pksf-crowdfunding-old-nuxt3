<script setup lang="js">
const preloader = ref(true);
onMounted(() => {
  setTimeout(() => {
    preloader.value = false;
  }, 1000);
});
// replace guardsToBeChecked with your guards
/*const guardsToBeChecked = "deshboard_management_view,deshboard_management_create,deshboard_management_edit,deshboard_management_delete";
const { checkGuards } = useCheckGuards(guardsToBeChecked);
const {
  hasViewPermission
} = checkGuards();*/
</script>
<template>
  <body class="hold-transition sidebar-mini layout-fixed">
    <slot />
  </body>
</template>

<style scoped></style>
