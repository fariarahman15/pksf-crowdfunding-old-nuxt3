<template>
  <div class="max-w-[300px]">
    <div class="join join-vertical w-full">
      <div
        class="collapse collapse-arrow join-item border border-base-300"
        v-for="(item, index) in accordionItems"
        :key="index"
      >
        <input type="radio" name="my-accordion" />
        <div class="collapse-title text-xl font-medium">{{ item.title }}</div>
        <div class="collapse-content">
          <p v-for="(menu, menuIndex) in item.menus" :key="menuIndex">
            {{ menu }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordionItems: [
        {
          title: "Title 1",
          menus: ["Menu 1", "Menu 2"],
        },
        {
          title: "Title 2",
          menus: ["Menu 3", "Menu 4"],
        },
        {
          title: "Title 3",
          menus: ["Menu 5", "Menu 6"],
        },
      ],
    };
  },
};
</script>
