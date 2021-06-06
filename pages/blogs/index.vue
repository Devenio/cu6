<template>
  <div class="container mx-auto pb-16">
    <sec-title
      text="بلاگ ها و مقالات"
      sub_title="در اینجا میتونید تمام مقالات موجود در سایت را مشاهده کنید"
    />
    <div class="mt-16 flex flex-wrap justify-around items-center">
        <post v-for="i in 9" :key="i" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
