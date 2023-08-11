<template>
  <CommonContainer background="bg-white">
    <section class="space-y-2 px-2 py-4 md:px-6 md:py-4">
      <div
        class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2"
      >
        <h5 class="text-3xl font-semibold leading-none text-primary">
          {{ sectionTitle }}
        </h5>

        <a
          href=""
          class="text-base font-semibold text-primary hover:underline bg-secondary border border-primary rounded-full text-center px-4 py-1 w-24"
          >See all</a
        >
      </div>

      <div
        class="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5"
      >
        <LandingPageProjectCard
          v-for="project in projects"
          :key="project.id"
          :id="project.id"
          :percentage="project.percentage"
          :projectImage="project.projectImage"
          :title="project.title"
          :profileImage="project.profileImage"
          :name="project.name"
          :occupation="project.occupation"
        />
      </div>
    </section>
  </CommonContainer>
</template>

<script>
export default {
  name: "ProjectSection",
  props: {
    sectionTitle: {
      type: String,
      default: "",
    },

    projects: {
      type: Object,
      default: () => {},
    },
  },

  // data() {
  //   return {
  //     projects: [
  //       {
  //         id: 1,
  //         percentage: "25%",
  //         projectImage: "_nuxt/public/images/demo_projectImage.png",
  //         title: "Noteworthy technology acquisitions 2021",
  //         profileImage: "_nuxt/public/images/demo_userImage.png",
  //         name: "Sample Name 1",
  //         occupation: "Entrepreneur",
  //       },
  //     ],
  //   };
  // },
};
</script>
