<template>
  <div
    class="flex flex-col items-center mt-3 p-5 cursor-pointer rounded-xl shadow-xl my-5 transform hover:scale-110"
    style="max-width: 350px;"
    :class="index%2==0 ? ['bg-white', 'text-plt-dark'] : ['bg-plt-dark', 'text-plt-white']"
  >
    <div
      class="w-16 h-16 rounded-full bg-plt-yellow flex items-center justify-center text-plt-white"
    >
      <fa :icon="['fas', 'home']" size="2x" />
    </div>
    <div>
      <h3 class="font-semibold text-lg text-center mt-3">
        ساخت مدل های ساختمانی
      </h3>
      <p class="text-center px-3 mt-3 opacity-75">
        لورم اپیسوم متن ساختگی در صنعت گرافیک که به منظور استفاده در طراحی و
        نمایش ساخته شده است.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
