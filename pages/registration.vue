<template>
  <div class="relative">
    <div class="bg-primary lg:grid lg:grid-cols-2 xl:grid-cols-3 justify-end">
      <div class="hidden lg:block">
        <img
          src="~/public/images/loginPage/farmer_2.png"
          alt=""
          class="min-h-full"
        />
      </div>
      <div class="xl:col-span-2 max-w-lg mx-auto xl:mx-0 xl:max-w-full">
        <div class="flex flex-col justify-center h-screen overflow-hidden">
          <div class="w-full px-6 m-auto lg:max-w-lg">
            <div
              class="px-6 py-8 bg-[#FEF7C6] rounded-md shadow-md ring-2 ring-gray-800/50 -mt-4 relative z-40"
            >
              <h1 class="text-2xl font-bold text-start text-primary mb-3">
                Sign Up
              </h1>
              <CommonRegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="absolute bottom-0 z-0">
    <img src="~/public/images/loginPage/vectors_login.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "",
};
</script>
