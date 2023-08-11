<template>
  <div>
    <form>
      <div class="flex rounded-full bg-white px-2">
        <input
          type="search"
          class="block p-2.5 w-full text-sm text-black rounded-l-full outline-none focus:ring-accent focus:border-accent"
          :placeholder="placeholder"
        />
        <span>
          <button
            type="submit"
            class="p-2.5 text-sm font-medium text-black rounded-r-full hover:text-accent focus:text-accent"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    placeholder: { type: String, default: "Search..." },
  },
};
</script>
