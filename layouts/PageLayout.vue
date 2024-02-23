<script setup lang="ts">
import AppHeader from "~/layouts/AppHeader.vue";

const isOpen = ref(false)
</script>

<template>
  <div class="mt-[30px] ml-[100px] mr-[100px]">

    <section class="flex">
      <nuxt-link to="/" class="text-[32px] font-[500]"> thoms</nuxt-link>

      <UButton @click="isOpen = true" color="white" class="mt-[10px] ml-[40px] h-[38px] w-[38px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
      </UButton>

      <UInput placeholder="Поиск по сайту"
              class="flex mt-[4px] ml-[50px] pl-[10px] py-[6px] h-[50px] w-[24rem] text-[#B6B6B6] text-[16px]"/>

      <div class="ml-auto">
        <AppHeader/>
      </div>
    </section>

    <USlideover v-model="isOpen" side="left">
      <div class="p-4 flex-1">
        <Placeholder class="h-full"/>
      </div>
    </USlideover>

    <slot/>

  </div>
</template>
