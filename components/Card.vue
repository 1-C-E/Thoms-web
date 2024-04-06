<script setup lang="ts">

defineProps({
  title: String,
  price: Number,
  isAdded: Boolean,
  isFavorite: Boolean,
  onClickAdd: Function
})
</script>


<template>
  <nuxt-link to="/product" class="rounded-[20px]">
    <div class="mt-[16px] mb-[100px] p-[4px] w-[200px] h-[250px] bg-white border-[3px] border-[#0493FA] rounded-[20px]">

      <NuxtImg src="/table_comp.png" class="w-[198px] rounded-[14px]"/>
      <h2 class="mt-[16px] text-[15px]">{{title}}</h2>

      <div class="flex justify-between mt-[20px]">
        <h2 class="text-[15px]"> {{price}} руб.</h2>
        <NuxtImg @click="onClickAdd" :src="!isAdded ? '/plus.svg' : 'check.svg'"/>
      </div>

    </div>
  </nuxt-link>
</template>
