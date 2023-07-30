<template>
  <div class="px-6">
    <div class="px-12">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-[30px] font-semibold leading-none text-primary">
          To Whom You May Invest?
        </h5>
        <a
          href="#"
          class="text-base font-semibold text-primary hover:underline bg-secondary border border-primary rounded-full px-4 py-1.5 text-center mr-2 mb-2"
        >
          See all
        </a>
      </div>

      <section class="grid grid-cols-4 gap-5">
        <LandingPageCard />
        <LandingPageCard />
        <LandingPageCard />
        <LandingPageCard />
        <LandingPageCard />
        <LandingPageCard />
        <LandingPageCard />
      </section>
    </div>
  </div>
</template>
