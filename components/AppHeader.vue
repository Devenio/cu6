<template>
  <header class="w-[300px]">
    <div
      class="w-full overflow-hidden bg-plt-darker top-0 transition-all duration-300 text-plt-white flex items-center justify-center"
      :class="openMenu ? 'h-64' : 'h-0'"
    >
      <ul
        class="flex flex-col items-center w-full divide-y-2 divide-gray-300 divide-opacity-25"
      >
        <nuxt-link
          to="/"
        
          class="py-5 w-full hover:bg-plt-dark text-center cursor-pointer"
        >
          صفحه اصلی
        </nuxt-link>
        <nuxt-link
          to="/services"
        
          class="py-5 w-full hover:bg-plt-dark text-center cursor-pointer"
        >
          خدمات
        </nuxt-link>
        <nuxt-link
          to="/blogs"
        
          class="py-5 w-full hover:bg-plt-dark text-center cursor-pointer"
        >
          بلاگ ها
        </nuxt-link>
        <nuxt-link
          to="/about"
        
          class="py-5 w-full hover:bg-plt-dark text-center cursor-pointer"
        >
          درباره من
        </nuxt-link>
      </ul>
    </div>
    <div class="w-full py-4 bg-plt-dark text-plt-white">
      <div
        class="container mx-auto flex items-center justify-between px-5 md:px-0"
      >
        <strong class="text-xl">LOGO</strong>
        <fa
          :icon="openMenu ? ['fas', 'times'] : ['fas', 'bars']"
          @click="openMenu = !openMenu"
          class="md:hidden text-2xl cursor-pointer"
        ></fa>
        <ul class="hidden md:flex items-center">
          <nuxt-link to="/" class="px-5 cursor-pointer">
            صفحه اصلی
          </nuxt-link>
          <nuxt-link to="/services" class="px-5 cursor-pointer">
            خدمات
          </nuxt-link>
          <nuxt-link to="/blogs" class="px-5 cursor-pointer">
            بلاگ ها
          </nuxt-link>
          <nuxt-link to="/about" class="px-5 cursor-pointer">
            درباره من
          </nuxt-link>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false
    };
  }
};
</script>

<style>
.nuxt-link-exact-active {
  @apply text-plt-yellow;
}
</style>
