<template>
  <div class="container mx-auto pb-16">
    <sec-title
      text="خدمات من"
      sub_title="در اینجا میتوانید لیست کامل خدمات من را مشاهده کنید"
    />
    <div class="flex flex-wrap justify-around items-center my-16">
      <service-post v-for="i in 9" :key="i" :index="i" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
