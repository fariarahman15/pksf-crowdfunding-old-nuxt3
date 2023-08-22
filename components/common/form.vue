<template>
  <div class="py-12">
    <h2 class="text-2xl font-bold">Underline</h2>
    <div class="mt-8 max-w-md">
      <div class="grid grid-cols-1 gap-6">
        <label class="block">
          <span class="text-gray-700">Full name</span>
          <input
            type="text"
            class="bg-transparent mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:outline-none"
            placeholder=""
          />
        </label>
        <label class="block">
          <span class="text-gray-700">Email address</span>
          <input
            type="email"
            class="bg-transparent mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:outline-none"
            placeholder="john@example.com"
          />
        </label>
        <label class="block">
          <span class="text-gray-700">When is your event?</span>
          <input
            type="date"
            class="bg-transparent mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:outline-none"
          />
        </label>
        <label class="block">
          <span class="text-gray-700">What type of event is it?</span>
          <select
            class="bg-transparent block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:outline-none"
          >
            <option>Corporate event</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Other</option>
          </select>
        </label>
        <label class="block">
          <span class="text-gray-700">Additional details</span>
          <textarea
            class="bg-transparent mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:outline-none"
            rows="2"
          ></textarea>
        </label>
        <div class="block">
          <div class="mt-2">
            <div>
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  class="border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black"
                />
                <span class="ml-2">Email me news and special offers</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
