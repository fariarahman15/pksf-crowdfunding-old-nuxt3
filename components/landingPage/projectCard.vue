<template>
  <div>
    <!-- <div class="max-w-full bg-white border border-gray-200 rounded-lg shadow">
      <a href="#" class="relative">
        <span
          class="z-10 absolute right-0 inline-flex items-center justify-center h-10 w-10 p-2 m-2 text-base font-semibold text-white bg-[#119CCA] rounded-full"
        >
          <span>25%</span>
        </span>
        <img
          class="rounded-t-lg"
          src="_nuxt/public/images/demo_projectImage.png"
          alt=""
        />
      </a>
      <div class="p-3">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>

        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0">
            <img
              class="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Neil image"
            />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              Sample Name
            </p>
            <p class="text-sm text-gray-500 truncate">Entrepreneur</p>
          </div>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#02AC57] rounded-lg hover:bg-[#28A742] focus:ring-2 focus:outline-none focus:ring-green-300"
          >
            Details
          </a>
        </div>
      </div>
    </div> -->

    <div
      class="max-w-full min-h-max bg-white border border-gray-200 rounded-lg shadow"
    >
      <a href="#" class="relative">
        <span
          class="z-10 absolute right-0 inline-flex items-center justify-center h-10 w-10 p-2 m-2 text-base font-semibold text-white bg-[#119CCA] rounded-full"
        >
          <span>{{ percentage }}</span>
        </span>
        <img class="rounded-t-lg" :src="projectImage" alt="Image" />
      </a>
      <div class="p-3">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {{ title }}
          </h5>
        </a>

        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0">
            <img
              class="w-8 h-8 rounded-full"
              :src="profileImage"
              alt="Profile Image"
            />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">{{ name }}</p>
            <p class="text-sm text-gray-500 truncate">{{ occupation }}</p>
          </div>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#02AC57] rounded-lg hover:bg-[#28A742] focus:ring-2 focus:outline-none focus:ring-green-300"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",

  props: {
    id: { type: String, default: "null" },
    percentage: { type: String, default: "null" },
    projectImage: { type: String, default: "null" },
    title: { type: String, default: "null" },
    profileImage: { type: String, default: "null" },
    name: { type: String, default: "null" },
    occupation: { type: String, default: "null" },
  },
};
</script>
