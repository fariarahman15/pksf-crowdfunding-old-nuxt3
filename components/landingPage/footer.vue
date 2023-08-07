<template>
  <CommonContainer :class="[bgClass]">
    <section
      class="grid grid-col-1 sm:grid-cols-2 text-white gap-x-6"
      :class="[padding, textClass]"
    >
      <div class="p-2">
        <img
          class="w-[250px]"
          src="~/public/images/logo_pksf_white.png"
          alt=""
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>

      <div class="grid grid-cols-2 p-2">
        <div class="flex flex-col">
          <h3 class="text-[14px] uppercase font-bold opacity-80">Categories</h3>
          <a class="link link-hover">Projects</a>
          <a class="link link-hover">Find Ideas</a>
          <a class="link link-hover">Podcasting</a>
          <a class="link link-hover">Comparison</a>
        </div>
        <div class="flex flex-col">
          <h3 class="text-[14px] uppercase font-bold opacity-80">
            Important Link
          </h3>
          <a class="link link-hover">PKSF</a>
          <a class="link link-hover">RMTP</a>
          <a class="link link-hover">Important link</a>
        </div>
      </div>

      <div class="p-2">
        <p>Hotline : 01XXXXXXXX</p>
        <p>Email : Info@crowdfunding.org</p>
      </div>

      <div class="relative flex items-center p-2">
        <div class="w-full">
          <div class="form-control rounded-full p-0">
            <input
              type="text"
              placeholder="Search"
              class="text-black px-5 py-2 rounded-full relative"
            />
          </div>
        </div>
        <span class="absolute right-3">
          <button class="inline bg-primary rounded-full px-2 py-1">
            Subscribe
          </button></span
        >
      </div>
    </section>

    <section>
      <div class="flex justify-between items-center px-6 bg-primary text-white">
        <div class="p-2">
          <p class="font-thin">Copyright © 2023 - All right reserved</p>
        </div>
        <div class="flex gap-4 p-2">
          <a><i class="fa-brands fa-facebook"></i> </a>
          <a><i class="fa-brands fa-twitter"></i></a>
          <a><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div></section
  ></CommonContainer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    padding: { type: String, default: "px-0 py-0" },
    border: { type: String, default: "border-none" },
    shadow: { type: String, default: "shadow-none" },
    rounded: { type: String, default: "rounded-none" },
    bg: { type: String, default: "white" },
    text: { type: String, default: "black" },
  },
  computed: {
    bgClass() {
      return this.bg ? `bg-${this.bg}` : "";
    },
    textClass() {
      return this.text ? `text-${this.text}` : "";
    },
  },
};
</script>

<style scoped></style>
