<template>
  <CommonContainer background="bg-secondary">
    <div class="flex justify-between">
      <div class="w-[50%] flex items-center">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <i class="fa-solid fa-bars"></i>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <details>
                <summary class="text-primary font-bold">About us</summary>
                <ul>
                  <li><a> About FundwithPKSF</a></li>
                  <li><a>About PKSF</a></li>
                  <li>
                    <a>RMTP </a>
                  </li>
                  <li><a>Partner Organizations (POs) </a></li>
                  <li><a>Success stories </a></li>
                  <li><a>FAQs </a></li>
                  <li><a>Podcasts </a></li>
                  <li><a>Contact us</a></li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary class="text-primary font-bold">How it works</summary>
                <ul>
                  <li><a>How FundwithPKSF will work? </a></li>
                  <li><a>What is Crowdfunding? </a></li>
                  <li>
                    <a>How Microfinance helps? </a>
                  </li>
                  <li><a>How Grants work? </a></li>
                  <li><a>How Debt financing work? </a></li>
                  <li>
                    <a>How Equity investment work? </a>
                  </li>
                  <li>
                    <a>Potential Enterprises of RMTP </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary class="text-primary font-bold">Projects</summary>
                <ul>
                  <li>
                    <a class="text-accent font-bold">Sub-projects</a>
                    <ul>
                      <li>
                        <details>
                          <summary class="font-bold">Horticulture</summary>

                          <ul>
                            <li><a>Safe Vegetables </a></li>
                            <li><a>High Value Flower Expansion </a></li>
                            <li><a>High Value Fruits </a></li>
                            <li><a>Ecological Farming </a></li>
                            <li><a>Safe Edible Oil </a></li>
                            <li><a>Integrated Agriculture</a></li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary class="font-bold">Livestock</summary>

                          <ul>
                            <li><a>Safe Poultry </a></li>
                            <li><a>Safe Meat and Dairy</a></li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary class="font-bold">
                            Safe Meat and Dairy
                          </summary>

                          <ul>
                            <li><a>Safe Fish </a></li>
                            <li><a> Safe Street Food </a></li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <a class="normal-case text-xl cursor-pointer"
          ><img class="w-[250px]" src="~/public/images/logo_pksf.png" alt=""
        /></a>
      </div>

      <div class="w-[50%] flex justify-end lg:justify-between gap-5">
        <div class="hidden lg:flex items-center space-x-10">
          <!-- <a class="link link-hover p-2">About us</a>
          <a class="link link-hover p-2">How it works</a>
          <a class="link link-hover p-2">Projects</a> -->

          <!-- <ul class="menu menu-horizontal px-1">
            <li tabindex="0">
              <details>
                <summary>About us</summary>
                <ul class="p-2">
                  <li><a>About FundwithPKSF</a></li>
                  <li><a>About PKSF</a></li>
                  <li>
                    <a>Rural Microenterprise Transformation Project (RMTP) </a>
                  </li>
                  <li><a>Partner Organizations (POs) </a></li>
                  <li><a>Success stories </a></li>
                  <li><a>FAQs </a></li>
                  <li><a>Podcasts </a></li>
                  <li><a>Contact us</a></li>
                </ul>
              </details>
            </li>
            <li tabindex="0">
              <details>
                <summary>How it works</summary>
                <ul class="p-2">
                  <li><a>a. How FundwithPKSF will work? </a></li>
                  <li><a>b. What is Crowdfunding? </a></li>
                  <li>
                    <a>c. How Microfinance helps? </a>
                  </li>
                  <li><a>d. How Grants work? </a></li>
                  <li><a>e. How Debt financing work? </a></li>
                  <li>
                    <a>f. How Equity investment work? </a>
                  </li>
                  <li>
                    <a> g. Potential Enterprises of RMTP </a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabindex="0">
              <details>
                <summary>Projects</summary>
                <ul class="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
          </ul> -->

          <div class="dropdown">
            <label tabindex="0" class="whitespace-nowrap">About us </label>
            <ul
              tabindex="0"
              class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li><a> About FundwithPKSF</a></li>
              <li><a>About PKSF</a></li>
              <li>
                <a>Rural Microenterprise Transformation Project (RMTP) </a>
              </li>
              <li><a>Partner Organizations (POs) </a></li>
              <li><a>Success stories </a></li>
              <li><a>FAQs </a></li>
              <li><a>Podcasts </a></li>
              <li><a>Contact us</a></li>
            </ul>
          </div>

          <div class="dropdown">
            <label tabindex="1" class="whitespace-nowrap">How it works </label>
            <ul
              tabindex="1"
              class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li><a>How FundwithPKSF will work? </a></li>
              <li><a>What is Crowdfunding? </a></li>
              <li>
                <a>How Microfinance helps? </a>
              </li>
              <li><a>How Grants work? </a></li>
              <li><a>How Debt financing work? </a></li>
              <li>
                <a>How Equity investment work? </a>
              </li>
              <li>
                <a>Potential Enterprises of RMTP </a>
              </li>
            </ul>
          </div>

          <div class="dropdown">
            <label tabindex="3" class="whitespace-nowrap">Projects </label>
            <ul
              tabindex="3"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <a class="text-accent font-bold">Sub-projects</a>
                <ul>
                  <li>
                    <a class="font-bold">Horticulture </a>
                    <ul>
                      <li><a>Safe Vegetables </a></li>
                      <li><a>High Value Flower Expansion </a></li>
                      <li><a>High Value Fruits </a></li>
                      <li><a>Ecological Farming </a></li>
                      <li><a>Safe Edible Oil </a></li>
                      <li><a>Integrated Agriculture</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="font-bold">Livestock </a>
                    <ul>
                      <li><a>Safe Poultry </a></li>
                      <li><a>Safe Meat and Dairy</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="font-bold">Safe Meat and Dairy </a>
                    <ul>
                      <li><a>Safe Fish </a></li>
                      <li><a> Safe Street Food </a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

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
  </CommonContainer>
</template>
<script>
export default {
  name: "NavBar",
  props: {
    // bg: { type: String, default: "white" },
    background: { type: String, default: "bg-white" },
  },
  // computed: {
  //   bgClass() {
  //     return this.bg ? `bg-${this.bg}` : "";
  //   },
  // },
};
</script>
