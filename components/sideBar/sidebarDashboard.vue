<template>
  <div class="min-w-[300px] max-w-min">
    <div class="join join-vertical w-full bg-primary text-white rounded-none">
      <div
        class="collapse collapse-arrow join-item border border-base-300"
        v-for="(item, index) in items"
        :key="index"
      >
        <input v-show="item.submenus" type="radio" name="accordion-menu" />
        <div v-if="item.submenus" class="collapse-title text-xl font-medium">
          {{ item.title }}
        </div>
        <div v-if="item.submenus" class="collapse-content">
          <div
            class="collapse collapse-arrow join-item"
            v-for="(submenu, subIndex) in item.submenus"
            :key="subIndex"
          >
            <input
              v-show="submenu.items"
              type="radio"
              name="accordion-submenu"
            />
            <div
              v-if="submenu.items"
              class="collapse-title text-xl font-medium"
            >
              {{ submenu.menu }}
            </div>
            <div v-if="submenu.items" class="collapse-content">
              <p
                v-for="(subItem, subItemIndex) in submenu.items"
                :key="subItemIndex"
              >
                {{ subItem }}
              </p>
            </div>

            <div v-else class="p-4 text-xl font-medium">
              {{ submenu.menu }}
            </div>
          </div>
        </div>

        <div v-else class="p-4 text-xl font-medium">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Dashboard",
        },
        {
          title: "Title 2",
          submenus: [{ menu: "Menu 3" }],
        },
        {
          title: "Title 3",
          submenus: [{ menu: "Menu 5", items: ["Menu 5", "Menu 6"] }],
        },
      ],
    };
  },
};
</script>
