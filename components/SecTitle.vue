<template>
  <div class="w-full flex flex-col items-center mt-10">
    <div style="width: 100px;height: 2px;" class="bg-plt-yellow mb-3" />
    <h2 class="font-semibold text-2xl">{{ text }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
