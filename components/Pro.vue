<template>
  <div
    class="overflow-hidden m-3 cursor-pointer flex items-center justify-center"
    style="max-width: 350px; height: 250px;"
  >
    <img
      src="~/assets/img/post1.jpg"
      alt="pro1"
      class="p-img z-0 w-full h-full object-cover object-center"
    />
    <div
      class="absolute bg-black opacity-75 hover:opacity-50 z-10" style="width: 350px; height: 250px;"
    ></div>
    <h2 class="font-bold text-3xl absolute text-plt-white z-50">پروژه اول</h2>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .p-img {
  filter: grayscale(1);
}
div:hover .p-img {
  filter: grayscale(0);
} */
</style>
