<template>
  <form class="w-full space-y-3">
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
        class="mt-6 w-full bg-accent hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Sign In
      </button>
    </div>
  </form>
</template>
