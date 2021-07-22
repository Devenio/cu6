<template>
  <div class="container mx-auto pb-16">
    <sec-title
      text="خدمات من"
      sub_title="در اینجا میتوانید لیست کامل خدمات من را مشاهده کنید"
    />
    <div class="flex flex-wrap justify-around items-center my-16">
      <service-post v-for="(service, index) in services" :key="service" :index="index" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res = await $axios.get("http://api.ehsanmoqimi.ir/Service/services/")
    console.log(res.data.data);
    return {
      services: res.data.data
    }
  }
};
</script>

<style lang="scss" scoped></style>
