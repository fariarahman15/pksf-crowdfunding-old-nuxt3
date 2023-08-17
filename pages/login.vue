<template>
  <div>
    <div class="bg-primary grid grid-cols-3 justify-end">
      <div class="col-span-2">
        <div
          class="relative flex flex-col justify-center h-screen overflow-hidden"
        >
          <div
            class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg"
          >
            <h1 class="text-3xl font-semibold text-center text-gray-700">
              Sign In
            </h1>
            <form class="space-y-4">
              <div>
                <label class="label">
                  <span class="text-base label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  class="w-full input input-bordered"
                />
              </div>
              <a
                href="#"
                class="text-xs text-gray-600 hover:underline hover:text-blue-600"
                >Forget Password?</a
              >
              <div>
                <button class="btn btn-block">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <img src="~/public/images/loginPage/farmer_1.png" alt="" />
      </div>
    </div>
    <div class="absolute bottom-0 z-0">
      <img src="~/public/images/loginPage/vectors_login.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>
