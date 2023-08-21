<template>
  <form class="w-full space-y-3">
    <div class="sm:flex sm:justify-between">
      <div class="form-control">
        <label class="label justify-start cursor-pointer">
          <input
            type="radio"
            name="userType"
            class="radio-xs checked:bg-accent mr-1"
            checked
          />
          <span class="label-text">Entrepreneur</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label justify-start cursor-pointer">
          <input
            type="radio"
            name="userType"
            class="radio-xs checked:bg-accent mr-1"
          />
          <span class="label-text">Investor</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label justify-start cursor-pointer">
          <input
            type="radio"
            name="userType"
            class="radio-xs checked:bg-accent mr-1"
          />
          <span class="label-text">Partner/Organization</span>
        </label>
      </div>
    </div>

    <div class="border-b border-accent py-2">
      <input
        class="appearance-none bg-transparent w-full text-primary mr-3 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Full Name"
        aria-label="Full Name"
      />
    </div>

    <div class="border-b border-accent py-2">
      <select
        class="select appearance-none bg-transparent w-full text-gray-400 mr-3 px-2 leading-tight focus:outline-none"
      >
        <option disabled selected text-primary>Cluster</option>
        <option>Svelte</option>
        <option>Vue</option>
        <option>React</option>
      </select>
    </div>

    <div class="border-b border-accent py-2">
      <input
        class="appearance-none bg-transparent w-full text-primary mr-3 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Email/Mobile"
        aria-label="Email/Mobile"
      />
    </div>

    <div class="flex items-baseline border-b border-accent py-2">
      <input
        class="appearance-none bg-transparent w-full text-primary mr-3 px-2 leading-tight focus:outline-none"
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

    <div class="flex items-baseline border-b border-accent py-2">
      <input
        class="appearance-none bg-transparent w-full text-primary mr-3 px-2 leading-tight focus:outline-none"
        type="password"
        placeholder="Confirm Password"
        aria-label="Confirm Password"
      />
      <label class="swap">
        <input type="checkbox" />
        <div class="swap-on"><i class="fa-solid fa-eye"></i></div>
        <div class="swap-off">
          <i class="fa-solid fa-eye-slash"></i>
        </div>
      </label>
    </div>

    <div>
      <button
        class="mt-6 w-full bg-accent hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Sign Up
      </button>
    </div>
  </form>
</template>
