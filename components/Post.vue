<template>
  <div style="max-width: 350px" class="m-3 cursor-pointer hover:bg-white p-3 rounded-xl box-content text-plt-dark">
    <div style="max-width: 350px; height: 240px;">
      <img
        src="~/assets/img/post1.jpg"
        alt=""
        class="w-full h-full object-cover object-center"
      />
    </div>
    <h2 class="text-right font-semibold mt-5" style="font-size: 20px">
      ساختمان های بزرگ چگونه ساخته میشوند؟
    </h2>
    <div class="flex items-center justify-end text-right opacity-75">
      5/10/1400
      <fa :icon="['fas', 'history']" class="ml-2 opacity-75" />
    </div>
    <p class="text-right mt-3 text-plt-dark">
      لورم اپیسوم متن ساختگی در صنعت گرافیک که به منظور استفاده در طراحی و نمایش
      ساخته شده است.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
