<template>
  <div class="w-full flex flex-col items-center mt-10">
    <div style="width: 100px;height: 2px;" class="bg-plt-yellow mb-3" />
    <h2 class="font-semibold text-2xl text-center">{{ text }}</h2>
    <h6 class="opacity-75 text-center px-3">{{ sub_title }}</h6>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      require: true
    },
    sub_title: {
      type: String,
      require: false
    }
  }
};
</script>

<style lang="scss" scoped></style>
