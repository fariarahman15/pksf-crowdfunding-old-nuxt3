<template>
  <div>
    <CommonContainer :class="[bgClass]">
      <div class="" :class="[padding, textClass]">
        <section
          class="grid grid-cols-2 px-6 py-6 items-center rounded-[20px] border bg-secondary"
        >
          <div class="w-[90%]">
            <h1 class="text-[40px] text-primary font-semibold mb-3">
              See how the platform works
            </h1>

            <p class="text-[24px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              ab odio labore accusamus repellat et quaerat dolorum beatae ipsa
              nostrum aperiam deserunt doloremque, suscipit sint magnam. Quam
              nulla officia omnis nihil veritatis eaque vitae deleniti. Mollitia
              libero sit unde totam fugiat corrupti ipsum repellat nostrum, aut
              veniam impedit tenetur quas!
            </p>
          </div>

          <div>
            <iframe
              class="rounded-md w-full h-[350px]"
              src="https://www.youtube.com/embed/-yhtVSW65Ag"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </div>
    </CommonContainer>
  </div>
</template>

<script>
export default {
  name: "Banner",
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
