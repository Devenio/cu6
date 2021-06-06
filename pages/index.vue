<template>
  <div class="w-full">
    <div class="container mx-auto">
      <section
        class="flex flex-col md:flex-row md:justify-between items-center py-16 xl:justify-around"
      >
        <div class="relative">
          <img
            src="~/assets/svg/prof.svg"
            alt=""
            class="absolute top-0 right-0 w-20"
          />
          <img
            src="~/assets/svg/prof.svg"
            alt=""
            class="absolute bottom-0 left-0 w-20"
          />
          <div class="profile rounded-full overflow-hidden relative z-50">
            <img
              src="https://i.ibb.co/mHhtpYn/julian-wan-WNo-Ln-Jo7t-S8-unsplash.jpg"
              alt="profile"
              class="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div class="mt-5">
          <h1
            class="text-center text-3xl px-3 leading-10 lg:text-right lg:text-5xl"
          >
            من
            <strong class="text-plt-yellow">نیما شهبازی</strong>
            هستم
          </h1>
          <h3
            class="opacity-75 text-center px-3 mt-3 lg:text-right lg:text-lg lg:mt-5"
          >
            لورم اپیسوم یک متن ساختگی در صنعت گرافیک
          </h3>
          <div
            class="flex items-center mt-5 lg:mt-10 w-full justify-around px-5 lg:justify-end lg:px-0"
          >
            <nuxt-link
              to="/services"
              class="lg:mx-2 py-2 px-5 border-2 border-plt-yellow rounded-lg text-plt-yellow hover:bg-plt-yellow hover:text-plt-white"
            >
              خدمات
            </nuxt-link>
            <nuxt-link
              to="/about"
              class="lg:mx-2 py-2 px-5 bg-plt-yellow rounded-lg text-plt-white hover:bg-yellow-600"
            >
              درباره من
            </nuxt-link>
          </div>
          <div
            class="flex items-center mt-5 w-full justify-center px-5 lg:justify-end"
          >
            <a
              href="#"
              class="w-10 h-10 nice-shadow rounded-full flex items-center justify-center text-plt-dark mx-2 hover:bg-gray-400"
            >
              <fa :icon="['fas', 'envelope']" />
            </a>
            <a
              href="#"
              class="w-10 h-10 nice-shadow rounded-full flex items-center justify-center text-plt-dark mx-2 hover:bg-gray-400"
            >
              <fa :icon="['fas', 'phone-alt']" />
            </a>
            <a
              href="#"
              class="w-10 h-10 nice-shadow rounded-full flex items-center justify-center text-plt-dark mx-2 hover:bg-gray-400"
            >
              <fa :icon="['fab', 'telegram-plane']" />
            </a>
          </div>
        </div>
      </section>
      <sec-title text="خدمات من" />
      <section
        class="flex flex-col md:flex-row md:justify-between items-center py-5 xl:justify-around"
      >
        <img
          src="~/assets/svg/group2.svg"
          alt="svg group 1"
          class="mb-10 lg:hidden sm:w-1/2"
        />
        <img
          src="~/assets/svg/group1.svg"
          alt="svg group 1"
          class="mb-10 hidden lg:block"
        />
        <div class="flex flex-col items-center">
          <service />
          <service />
          <nuxt-link
            to="/services"
            class="py-2 px-5 mt-5 rounded-xl border-2 border-plt-yellow text-plt-yellow hover:text-plt-white hover:bg-plt-yellow"
          >
            مشاهده همه خدمات
          </nuxt-link>
        </div>
      </section>
      <sec-title text="آخرین مقالات" />
      <section class="w-full">
        <div class="flex flex-wrap justify-around items-center mt-10">
          <post />
          <post />
          <post />
        </div>
        <div class="w-full flex items-center justify-center mb-16">
          <nuxt-link
          to="/blogs"
          class="py-2 px-5 mt-10 mx-auto rounded-xl border-2 hover:border-plt-yellow hover:text-plt-yellow hover:bg-transparent text-plt-white bg-plt-yellow"
        >
          مشاهده همه مقالات
        </nuxt-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile {
  width: 282px;
  height: 282px;
}
@media screen and (min-width: 1024px) {
  .profile {
    width: 400px;
    height: 400px;
  }
}
</style>
