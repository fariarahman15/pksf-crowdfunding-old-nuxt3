<template>
  <div class="">
    <div
      class="relative bg-primary lg:grid lg:grid-cols-2 xl:grid-cols-3 justify-end"
    >
      <div class="xl:col-span-2 max-w-lg mx-auto xl:mx-0 xl:max-w-full">
        <div class="flex flex-col justify-center h-screen overflow-hidden">
          <div class="w-full px-6 m-auto lg:max-w-lg">
            <div class="flex justify-start">
              <img
                src="~/public/images/loginPage/icon_tk.png"
                alt=""
                class="w-20 h-24"
              />
            </div>
            <div
              class="px-6 py-8 bg-[#FEF7C6] rounded-md shadow-md ring-2 ring-gray-800/50 -mt-4 relative z-40"
            >
              <h1 class="text-2xl font-bold text-start text-primary mb-3">
                Sign In
              </h1>
              <form class="w-full space-y-4">
                <div class="border-b border-teal-500 py-2">
                  <input
                    class="appearance-none bg-transparent w-full text-gray-900 mr-3 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Username"
                    aria-label="Username"
                  />
                </div>
                <div class="flex items-baseline border-b border-teal-500 py-2">
                  <input
                    class="appearance-none bg-transparent w-full text-gray-900 mr-3 px-2 leading-tight focus:outline-none"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                  />
                  <label class="swap">
                    <input type="checkbox" />
                    <div class="swap-on"><i class="fa-solid fa-eye"></i></div>
                    <div class="swap-off">
                      <i class="fa-solid fa-eye-slash"></i>
                    </div>
                  </label>
                </div>
                <a
                  href="#"
                  class="flex justify-end text-xs text-gray-600 hover:underline hover:text-blue-600"
                  >Forget Password?</a
                >

                <div class="mb-6">
                  <label
                    class="md:w-2/3 block text-gray-500 font-bold md:flex md:items-center"
                  >
                    <input class="mr-2 leading-tight" type="checkbox" />
                    <span class="text-sm"> Remember me </span>
                  </label>
                </div>
                <div>
                  <button
                    class="w-full bg-accent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block">
        <img
          src="~/public/images/loginPage/farmer_1.png"
          alt=""
          class="min-h-full"
        />
      </div>
    </div>
    <div class="fixed bottom-0 z-0">
      <img src="~/public/images/loginPage/vectors_login.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>
