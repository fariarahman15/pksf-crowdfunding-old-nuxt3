<template>
  <div>
    <div class="bg-secondary flex justify-between px-6 py-1">
      <div class="w-[50%] flex items-center">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <i class="fa-solid fa-bars"></i>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>About us</a></li>
            <li>
              <a>How it works</a>
            </li>
            <li><a>Projects</a></li>
          </ul>
        </div>
        <a class="normal-case text-xl cursor-pointer"
          ><img class="w-[250px]" src="~/public/images/logo_pksf.png" alt=""
        /></a>
      </div>

      <div class="w-[50%] flex justify-end lg:justify-between gap-5">
        <div class="hidden lg:flex items-center space-x-10">
          <a class="link link-hover p-2">About us</a>
          <a class="link link-hover p-2">How it works</a>
          <a class="link link-hover p-2">Projects</a>

          <div class="p-3">
            <a href="" class="btn btn-sm btn-success rounded-full px-3 py-1"
              >Join</a
            >
          </div>
        </div>

        <div class="flex items-center">
          <a href="" class="link link-hover p-2">Login</a>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  props: {
    padding: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    bold: { type: Boolean, default: true },
    rounded: { type: String, default: "rounded " },
    bg: { type: String, default: "" },
  },
  computed: {
    bgClass() {
      return this.bg ? `bg-${this.bg}` : "";
    },
  },
};
</script>
