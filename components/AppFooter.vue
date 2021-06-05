<template>
  <footer class="w-full bg-plt-dark text-plt-white">
    <div class="w-full flex items-center jsutify-center flex-col py-8">
      <h3 class="text-center px-5">
        برای با خبر شدن از جدیدترین مقالات ایمیل خود را در برای ما ارسال کنید
      </h3>
      <input
        type="email"
        class="py-2 px-8 sm:px-16 text-center outline-none mt-3"
        style="background-color: #5C5C5C"
        placeholder="لطفا ایمیل خود را وارد کنید"
      />
      <button class="border-2 border-plt-white py-2 px-8 mt-5 outline-none">
        ارسال
      </button>
    </div>
    <div class="w-full bg-plt-darker">
      <div
        class="container mx-auto flex flex-col md:flex-row md:justify-between items-center py-3"
      >
        <span class="opacity-50">&copy; All Right Reserved.</span>
        <div class="mt-2 md:mt-0">
          <a href="#" class="mx-1 opacity-50 hover:opacity-100">
            <fa :icon="['fab', 'telegram-plane']" size="lg" />
          </a>
          <a href="#" class="mx-1 opacity-50 hover:opacity-100">
            <fa :icon="['fab', 'instagram']" size="lg" />
          </a>
          <a href="#" class="mx-1 opacity-50 hover:opacity-100">
            <fa :icon="['fab', 'whatsapp']" size="lg" />
          </a>
          <a href="#" class="mx-1 opacity-50 hover:opacity-100">
            <fa :icon="['fab', 'twitter']" size="lg" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
