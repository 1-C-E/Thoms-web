<script setup lang="ts">
</script>

<template>
  <div class="flex mt-[30px] ml-[100px]">
    <nuxt-link to="/" class="text-[32px] font-[500]"> ФомсРоссия </nuxt-link>

    <UInput placeholder="поиск по сайту" class="flex mt-[6px] ml-[50px] pl-[10px] py-[6px] h-[40px] w-[24rem] text-[#B6B6B6] text-[16px] rounded-[15px]"/>


    <section class="ml-auto space-x-[10px]">
      <nuxt-link to="/messages" class="nav-component"> сообщения</nuxt-link>
      <nuxt-link to="/basket" class="nav-component"> корзина</nuxt-link>
      <nuxt-link to="/profile" class="nav-component"> профиль</nuxt-link>
      <nuxt-link to="/selection" class="nav-component"> подбор</nuxt-link>
    </section>
  </div>
</template>

<style scoped>

.header {
  display: flex;
}

.navbar {
  display: flex;
}

</style>