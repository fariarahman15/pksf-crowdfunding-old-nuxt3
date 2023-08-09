<template>
  <CommonContainer>
    <div class="px-2 py-4 md:px-6 md:py-8">
      <section
        class="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-4 md:px-6 md:py-6 items-center rounded-[20px] border bg-secondary"
      >
        <div class="lg:w-[90%]">
          <h1 class="text-3xl text-primary font-semibold mb-3">
            See how the platform works
          </h1>

          <p class="sm:text-xl lg:text-2xl text-justify lg:text-start">
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
</template>

<script>
export default {
  name: "Banner",
};
</script>
