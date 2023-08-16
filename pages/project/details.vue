<template>
  <div>
    <LandingPageNavbar />

    <CommonContainer class="sm:flex gap-4 py-4 space-y-4 sm:space-y-0">
      <section class="md:w-2/3">
        <div
          class="p-4 max-w-full bg-white border border-gray-200 rounded-lg shadow space-y-2"
        >
          <div>
            <h5
              class="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-black"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </h5>

            <p class="text-sm font-bold text-accent truncate">
              Location: Address Here
            </p>
          </div>

          <div href="#" class="relative">
            <span
              class="z-10 absolute right-0 inline-flex items-center justify-center h-10 w-10 p-2 m-2 text-base font-semibold text-white bg-[#119CCA] rounded-full"
            >
              <span>25%</span>
            </span>
            <img
              class="w-full"
              src="~/public/images/demo_projectImage_1.png"
              alt=""
            />
          </div>

          <div
            class="text-sm font-medium text-justify text-black border-b border-gray-200"
          >
            <ul class="flex flex-wrap -mb-px">
              <li class="mr-2">
                <nuxt-link
                  to=""
                  class="inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-accent hover:border-accent active:text-accent focus:text-accent active:border-accent focus:border-accent"
                  >Idea Details</nuxt-link
                >
              </li>
              <li class="mr-2">
                <nuxt-link
                  to=""
                  class="inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-accent hover:border-accent active:text-accent focus:text-accent active:border-accent focus:border-accent"
                  >Feedback & Comments</nuxt-link
                >
              </li>
            </ul>
          </div>

          <div>
            <ol class="list-inside list-square">
              <li>
                But also the leap into electronic typesetting, remaining
                essentially unchanged.
              </li>
              <li>
                It was popularised in the 1960s with the release of Letraset
                sheets containing
              </li>
              <li>
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </li>
            </ol>
          </div>

          <div class="sm:flex justify-between gap-3">
            <CommonCard background="bg-accent" class="text-white p-3">
              <h5 class="text-sm font-semibold">Estimated Fund Needed</h5>
              <h3 class="text-2xl font-bold">৳<span>15,41,241</span></h3>
            </CommonCard>
            <CommonCard background="bg-green" class="text-white p-3">
              <h5 class="text-sm font-semibold">Estimated Fund Needed</h5>
              <h3 class="text-2xl font-bold">৳<span>15,41,241</span></h3>
            </CommonCard>
            <CommonCard background="bg-red" class="text-white p-3">
              <h5 class="text-sm font-semibold">Estimated Fund Needed</h5>
              <h3 class="text-2xl font-bold">৳<span>15,41,241</span></h3>
            </CommonCard>
          </div>
        </div>
      </section>

      <section class="md:w-1/3 space-y-2">
        <h1 class="text-lg font-bold">Similar Projects</h1>
        <div class="grid xs:grid-cols-1 gap-5">
          <div
            class="max-w-full bg-white border border-gray-200 rounded-lg shadow"
          >
            <a href="#" class="relative">
              <span
                class="z-10 absolute right-0 inline-flex items-center justify-center h-10 w-10 p-2 m-2 text-base font-semibold text-white bg-[#119CCA] rounded-full"
              >
                <span>25%</span>
              </span>
              <img
                class="rounded-t-lg"
                src="~/public/images/demo_projectImage_2.png"
                alt=""
              />
            </a>
            <div class="p-3">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                >
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>

              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="~/public/images/demo_userImage.png"
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
          </div>
          <div
            class="max-w-full bg-white border border-gray-200 rounded-lg shadow"
          >
            <a href="#" class="relative">
              <span
                class="z-10 absolute right-0 inline-flex items-center justify-center h-10 w-10 p-2 m-2 text-base font-semibold text-white bg-[#119CCA] rounded-full"
              >
                <span>25%</span>
              </span>
              <img
                class="rounded-t-lg"
                src="~/public/images/demo_projectImage_3.png"
                alt=""
              />
            </a>
            <div class="p-3">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                >
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>

              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="~/public/images/demo_userImage.png"
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
          </div>
        </div>
      </section>
    </CommonContainer>

    <!-- <LandingPagePaymentSection /> -->
    <LandingPageFooter />
  </div>
</template>

<script setup>
useHead({
  title: "Project Details",
  link: [{ rel: "icon", type: "image/png", href: "/favicon_pksf.png" }],
  props: {
    sectionTitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          percentage: "25%",
          projectImage: "~/public/images/demo_projectImage.png",
          title: "Noteworthy technology acquisitions 2021",
          profileImage: "~/public/images/demo_userImage.png",
          name: "Sample Name 1",
          occupation: "Entrepreneur",
        },
      ],
    };
  },
});
</script>
