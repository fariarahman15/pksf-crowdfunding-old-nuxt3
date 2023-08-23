<script setup></script>

<template>
  <nuxt-layout name="breadcrumb">
    <p>This is the content of page 2</p>

    <nuxt-link to="/">Go back to index</nuxt-link>

    <div class="container mx-auto p-4">
      <dumb-components-accordion></dumb-components-accordion>
    </div>
  </nuxt-layout>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: "Menu 1",
          submenu: ["Submenu Item 1", "Submenu Item 2", "Submenu Item 3"],
          open: false,
        },
        {
          title: "Menu 2",
          submenu: ["Submenu Item 1", "Submenu Item 2", "Submenu Item 3"],
          open: false,
        },
      ],
    };
  },
};
</script>
