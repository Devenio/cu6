<template>
  <div class="container mx-auto pb-16">
    <div class="flex flex-col lg:flex-row lg:justify-between lg:py-10">
      <div class="w-full lg:max-w-lg p-3 lg:p-0">
        <div class="w-full profile overflow-hidden rounded-xl">
          <img
            src="https://i.ibb.co/mHhtpYn/julian-wan-WNo-Ln-Jo7t-S8-unsplash.jpg"
            alt="profile"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div>
        <h1
          class="text-center text-plt-yellow text-3xl font-semibold mt-3 lg:text-right"
        >
          نیما شهبازی
        </h1>
        <div class="text-right px-3 lg:px-0 mt-3">
          <strong>تاریخ تولد</strong>:
          <span>1/5/1366</span>
        </div>
        <div class="text-right px-3 lg:px-0 mt-1">
          <strong>ملیت</strong>:
          <span>ایرانی</span>
        </div>
        <div class="text-right px-3 lg:px-0 mt-1">
          <strong>سابقه کار</strong>:
          <span>5 سال</span>
        </div>
        <div class="w-full flex flex-col items-end mt-10 px-3 lg:px-0">
          <h2 class="font-semibold text-xl text-right">درباره من</h2>
          <div style="width: 150px;height: 2px;" class="bg-plt-yellow mt-2" />
        </div>
        <div class="w-full flex items-end justify-end">
          <p
            class="text-right px-3 lg:px-0 mt-3 opacity-75"
            style="max-width: 500px"
          >
            لورم اپیسوم یک متن ساختگی در صنعت گرافیک لورم اپیسوم یک متن ساختگی
            در صنعت گرافیک لورم اپیسوم یک متن ساختگی در صنعت گرافیک لورم اپیسوم
            یک متنلورم اپیسوم یک متن ساختگی در صنعت گرافیک لورم اپیسوم یک متن
            ساختگی در صنعت گرافیک لورم اپیسوم یک متن ساختگی در صنعت گرافیک لورم
            اپیسوم یک متن
          </p>
        </div>
        <div class="w-full flex flex-col items-end mt-10 px-3 lg:px-0">
          <h2 class="font-semibold text-xl text-right">ارتباط با من</h2>
          <div style="width: 150px;height: 2px;" class="bg-plt-yellow mt-2" />
        </div>
        <div class="text-right px-3 lg:px-0 mt-3">
          <strong>تلفن</strong>:
          <span>+989933255668</span>
        </div>
        <div class="text-right px-3 lg:px-0 mt-1">
          <span>xyz@gmail.com</span>
          :<strong>ایمیل</strong>
        </div>
        <div class="mt-3 px-3 lg:px-0" dir="rtl">
          <a href="#" class="mx-1 opacity-75 hover:opacity-100">
            <fa :icon="['fab', 'telegram-plane']" size="lg" />
          </a>
          <a href="#" class="mx-1 opacity-75 hover:opacity-100">
            <fa :icon="['fab', 'instagram']" size="lg" />
          </a>
          <a href="#" class="mx-1 opacity-75 hover:opacity-100">
            <fa :icon="['fab', 'whatsapp']" size="lg" />
          </a>
          <a href="#" class="mx-1 opacity-75 hover:opacity-100">
            <fa :icon="['fab', 'twitter']" size="lg" />
          </a>
        </div>
      </div>
    </div>
    <sec-title text="سوابق اجرایی" />
    <div class="mt-10 flex flex-wrap items-center justify-center">
      <pro v-for="i in 6" :key="i" />
    </div>
    <div class="w-full flex flex-col items-end mt-10 px-3 lg:px-0">
      <h2 class="font-semibold text-xl text-right">جزییات سابقه اجرایی</h2>
      <div style="width: 150px;height: 2px;" class="bg-plt-yellow mt-2" />
    </div>
    <div class="flex flex-col lg:flex-row-reverse p-3 lg:p-0 mt-5">
      <div class="rounded-xl overflow-hidden w-full lg:ml-3" style="height: 250px">
        <img
          src="~/assets/img/post1.jpg"
          alt="pro1"
          class="p-img z-0 w-full h-full object-cover object-center"
        />
      </div>
      <div>
        <h1 class="text-plt-dark text-xl font-semibold mt-5 text-right">
          پروژه اجرایی اول
        </h1>
        <div class="flex items-center justify-end text-right opacity-75">
          5/10/1400
          <fa :icon="['fas', 'history']" class="ml-2 opacity-75" />
        </div>
        <h3 class="text-plt-dark text-lg font-semibold mt-5 text-right">
          توضیحات پروژه
        </h3>
        <p class="text-right opacity-75">
          لورم اپیسوم یک متن ساختگی در صنعت گرافیک لورم اپیسوم یک متن ساختگی در
          صنعت گرافیک لورم اپیسوم یک متن ساختگی در صنعت گرافیک لورم اپیسوم یک
          متن ساختگی در صنعت گرافیک لورم اپیسوصنعت گرافیک لورم اپیسوم یک
          متن ساختگی در صنعت گرافیک
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile {
  height: 250px;
}
@media (min-width: 1024px) {
  .profile {
    height: 100%;
  }
}
</style>
