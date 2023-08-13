<template>
  <div>
    <LandingPageNavbar />

    <section>
      <CommonContainer class="w-2/3">
        <div
          class="p-4 max-w-full bg-white border border-gray-200 rounded-lg shadow"
        >
          <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
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
              src="~/public/images/demo_projectImage.png"
              alt=""
            />
          </div>
          <div class="">
            <div
              class="text-sm font-medium text-center text-gray-500 border-b border-gray-200"
            >
              <ul class="flex flex-wrap -mb-px">
                <li class="mr-2">
                  <a
                    href="#"
                    class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                    >Idea Details</a
                  >
                </li>
                <li class="mr-2">
                  <a
                    href="#"
                    class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active"
                    aria-current="page"
                    >Feedback & Comments</a
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
                  Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </li>
              </ol>
            </div>
          </div>
        </div></CommonContainer
      >
    </section>
    <LandingPageFooter />
  </div>
</template>
