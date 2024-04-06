<script setup lang="ts">
import AppNavigation from "~/components/Navigation.vue";

const isOpen = ref(false)
</script>

<template>
  <div>
    <div class="bg-white rounded-b-[40px]">
      <div class="pt-[30px] ml-[100px] mr-[100px]">

        <section class="flex">
          <nuxt-link to="/" class="text-[32px] font-[500]"> thoms</nuxt-link>

          <UButton @click="isOpen = true" class="mt-[10px] ml-[40px] h-[38px] w-[90px] rounded-[14px] bg-gradient-to-r from-[#7875FF] to-[#00A3FF] hover:bg-white">
            <div class="ml-auto mr-auto text-[16px] text-white"> каталог</div>
          </UButton>

          <UInput placeholder="Поиск по сайту"
                  color="#7875FF"
                  class="flex mt-[4px] ml-[50px] pl-[10px] py-[6px] h-[50px] w-[24rem] rounded-[50px] text-[#B6B6B6] text-[16px]"/>

          <div class="ml-auto">
            <AppNavigation/>
          </div>
        </section>

        <USlideover v-model="isOpen" side="left">
          <div class="p-4 flex-1">
            <Placeholder class="h-full"/>
          </div>
        </USlideover>
      </div>
    </div>

    <div class="pt-[30px] ml-[100px] mr-[100px]">
      <slot/>
    </div>
  </div>
</template>
