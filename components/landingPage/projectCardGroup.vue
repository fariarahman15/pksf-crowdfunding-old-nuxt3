<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: "ProjectCardGroup",

  data() {
    return {
      projects: [
        {
          id: 1,
          percentage: "25%",
          projectImage: "_nuxt/public/images/demo_projectImage.png",
          title: "Noteworthy technology acquisitions 2021",
          profileImage: "_nuxt/public/images/demo_userImage.png",
          name: "Sample Name 1",
          occupation: "Entrepreneur",
        },
      ],
    };
  },
};
</script>
