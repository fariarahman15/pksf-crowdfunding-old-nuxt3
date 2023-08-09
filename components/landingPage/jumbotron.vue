<template>
  <CommonContainer background="bg-primary" class=""
    ><section
      class="grid grid-cols-1 sm:grid-cols-2 justify-items-center md:justify-items-start items-center gap-2 px-2 py-4 md:px-6 md:py-8"
    >
      <div class="w-full md:w-[90%]">
        <h1
          class="mb-3 text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-start lg:w-[80%]"
        >
          Exploring Innovative Funding Ideas
        </h1>

        <CommonSearchInput />
      </div>

      <div class="w-full">
        <img
          src="https://images.pexels.com/photos/2407634/pexels-photo-2407634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="w-full rounded-lg shadow-2xl max-h-[350px]"
        />
      </div>
    </section>
  </CommonContainer>
</template>

<script>
export default {
  name: "Jumbotron",
};
</script>
